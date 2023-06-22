// value 가 number 일 경우 px 로 변환
// value 가 string 일 경우 단위가 없다면 number 로 변환 후 px 로 변환
// value 가 string 일 경우 단위가 있다면 그대로 반환
// value 가 string 일 경우 단위가 px 이라면 rem 으로 변환 후 반환
const layoutCalculator = (value: string | number) => {
  let result = value;

  if (typeof value === "number") {
    result = `${value}px`;
  }

  if (typeof value === "string") {
    if (
      value.includes("px") ||
      value.includes("rem") ||
      value.includes("em") ||
      value.includes("vw") ||
      value.includes("vh") ||
      value.includes("vmin") ||
      value.includes("vmax") ||
      value.includes("%")
    ) {
      result = value;
    } else {
      const numberValue = parseFloat(value);
      if (isNaN(numberValue)) {
        result = value;
      }
      result = `${numberValue}px`;
    }
  }

  if (result.toString().includes("px")) {
    result = pxToRem(result.toString());
  }

  return result.toString();
};

export const pxToRem = (value: string) => {
  const px = parseFloat(value);
  const base = 16;
  return `${px / base}rem`;
};

export default layoutCalculator;
