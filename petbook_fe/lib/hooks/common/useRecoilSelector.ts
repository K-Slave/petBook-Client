import { RecoilState, selector, useRecoilValue } from "recoil";

// 기본적으로 useRecoilValue 는, atom 내의 객체가 하나라도 변경되면
// 리렌더링 됩니다.

// useRecoilValue 의 단점을 개선한 커스텀 훅
// recoil 사용시, 다른 값이 변경되서 리렌더링 낭비가 심하다면?
// 원하는 값만이 변경될때 렌더링 되는 훅이 필요하다면?
// 이 커스텀훅을 사용하면 됩니다.

const getKeys = (obj: any) => {
  return Object.keys(obj)[0];
};

const getSelectorResult = (targetProp: string, targetValue: any) => {
  const resultObj: any = {};

  resultObj[targetProp] = targetValue;

  return resultObj;
};

const atomSelector = (atom: RecoilState<any>, selectProperty: string) => {
  const uniqueProperty = new Date().getTime() + Math.random();

  return selector({
    key: `${atom.key}_${selectProperty}_${uniqueProperty}`,
    get: ({ get }) => {
      const atomValue = get(atom);
      return atomValue[selectProperty];
    },
  });
};

/**
 * 타겟이 된 값이 변경될때만 리렌더링 됩니다.
 * @generic 대상 값의 타입입니다.
 * @param atom 대상 atom 입니다
 * @param selectProperty 대상 객체의 프로퍼티 이름입니다.
 * @returns 객체가 아닌 선택한 value 만 리턴됩니다.
 */
const useRecoilSelector = <T, P>(atom: RecoilState<T>, selectProperty: P) => {
  const targetProp = getKeys(selectProperty);
  const targetValue = useRecoilValue(atomSelector(atom, targetProp));
  const result: P = getSelectorResult(targetProp, targetValue);

  return result;
};

export default useRecoilSelector;
