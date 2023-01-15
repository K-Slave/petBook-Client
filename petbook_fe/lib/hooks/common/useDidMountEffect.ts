import { useEffect, useRef } from "react";

const useDidMountEffect = (
  callback: React.EffectCallback,
  deps?: React.DependencyList | undefined
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current === false) {
      didMount.current = true;

      return;
    }

    if (didMount.current === true) {
      callback();
    }
  }, deps);

  return { didMount };
};

export default useDidMountEffect;
