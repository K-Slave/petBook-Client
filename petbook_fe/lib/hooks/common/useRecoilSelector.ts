import { RecoilState, selector, useRecoilValue } from "recoil";

// 기본적으로 useRecoilValue 는, atom 내의 객체가 하나라도 변경되면
// 리렌더링 됩니다.

// useRecoilValue 의 단점을 개선한 커스텀 훅
// recoil 사용시, 다른 값이 변경되서 리렌더링 낭비가 심하다면?
// 원하는 값만이 변경될때 렌더링 되는 훅이 필요하다면?
// 이 커스텀훅을 사용하면 됩니다.

const atomSelector = (atom: RecoilState<any>, selectProperty: any) => {
  const uniqueProperty = new Date().getTime() + Math.random();
  const selectedNames = Object.keys(selectProperty).join("_");

  return selector({
    key: `${atom.key}_${selectedNames}_${uniqueProperty}`,
    get: ({ get }) => {
      const atomValue = get(atom);
      const copiedAtom = { ...atomValue };

      try {
        for (const prop in copiedAtom) {
          if (selectProperty[prop] === undefined) {
            delete copiedAtom[prop];
          }
        }
      } catch (error) {
        console.error(error);
      }

      return copiedAtom;
    },
  });
};

/**
 * 타겟이 된 값이 변경될때만 리렌더링 됩니다.
 * @generic 대상 값의 타입입니다.
 * @param atom 대상 atom 입니다
 * @param selectProperty 초기값을 할당한 대상 객체입니다
 * @returns 객체가 아닌 선택한 value 만 리턴됩니다.
 */
const useRecoilSelector = <T, P>(atom: RecoilState<T>, selectProperty: P) => {
  const targetValue: P = useRecoilValue(atomSelector(atom, selectProperty));

  return targetValue;
};

export default useRecoilSelector;
