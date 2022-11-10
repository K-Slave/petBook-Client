export default function replaceAll(
  input: string,
  target: string,
  noBlank?: boolean
): string | undefined {
  if (!input.includes(target)) return undefined;
  let temp = [];

  const splitedInput = input.split(target);
  temp =
    noBlank === true ? splitedInput.map((str) => str.trim()) : splitedInput;
  const joinedInput = temp.join("");

  return joinedInput;
}
