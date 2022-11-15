import { RecoilState, useSetRecoilState } from "recoil";
import useRecoilSelector from "./useRecoilSelector";

const useSelectorState = <T, P>(atom: RecoilState<T>, selectProperty: P) => {
  const selectorValue = useRecoilSelector(atom, selectProperty);
  const recoilSetter = useSetRecoilState(atom);

  return [selectorValue, recoilSetter] as [
    typeof selectorValue,
    typeof recoilSetter
  ];
};

export default useSelectorState;
