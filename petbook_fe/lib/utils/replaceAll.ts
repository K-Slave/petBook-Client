// string.prototype.replaceAll 이 safari < 13.1, node < 15 에서 동작하지 않으므로

// TODO : 대소문자 구분 잘못됨 ( 소문자 검색 -> 대문자 허용 만 되고 반대는 안됌)
// 해당 함수로 대체하여 사용
const replaceAll = (
  target: string,
  replaceTarget: string,
  replaceText: string,
  originStrList?: string[]
) => {
  const splitedInput = target.split(replaceTarget);

  const joinedInput = splitedInput.join(replaceText);

  return joinedInput;
};
export default replaceAll;
