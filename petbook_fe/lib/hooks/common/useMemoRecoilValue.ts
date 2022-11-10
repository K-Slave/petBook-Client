import React from "react";
import { RecoilState, useRecoilValue } from "recoil";

const useMemoRecoilValue = (atom: RecoilState<any>, selector: string) => {
  const recoilValue = useRecoilValue(atom);
  const targetValue = Object(selector);

  console.log(recoilValue, "recoilValue");
  console.log(targetValue, "targetValue");
};

export default useMemoRecoilValue;
