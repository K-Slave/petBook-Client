import React, { PropsWithChildren } from "react";

const LandingSecond = () => {
  return <div></div>;
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return <>{children}</>;
};

LandingSecond.Wrap = Wrap;

export default LandingSecond;
