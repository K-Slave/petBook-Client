// string.prototype.replaceAll 이 safari < 13.1, node < 15 에서 동작하지 않으므로

// 해당 함수로 대체하여 사용
const replaceAll = (
  target: string,
  replaceTarget: string,
  replaceText: string
) => {
  const splitedInput = target.split(replaceTarget);

  const joinedInput = splitedInput.join(replaceText);

  return joinedInput;
};
export default replaceAll;
