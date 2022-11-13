import { RecoilState, useSetRecoilState } from "recoil";
import useRecoilSelector from "./useRecoilSelector";

const useSelectorState = <T, P>(
  atom: RecoilState<P>,
  selectProperty: string
) => {
  const selectorValue = useRecoilSelector<T>(atom, selectProperty);
  const recoilSetter = useSetRecoilState(atom);

  return [selectorValue, recoilSetter] as [
    typeof selectorValue,
    typeof recoilSetter
  ];
};

export default useSelectorState;
