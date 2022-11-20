// hashTag keyDown 이벤트 핸들러
// "Enter" 일때만 인자로 받은 setter 함수를 실행시키고
// 이외에는 result 객체를 상태 형태로 리턴해요
const hashTagBlur = (
  blurEvent: React.FocusEvent<HTMLInputElement>,
  setter: (textValue: string) => void,
  errorSetter: React.Dispatch<React.SetStateAction<boolean>>
): { done: boolean } => {
  // TODO : 비속어 필터, 특수문자 필터, SQLinjection, XSS 등 추가 필터링 해야함

  if (blurEvent.currentTarget.value.includes(" ")) {
    errorSetter(true);
    return { done: true };
  }

  setter(blurEvent.currentTarget.value);
  return { done: true };
};

export default hashTagBlur;
