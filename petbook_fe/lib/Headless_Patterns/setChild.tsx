import React, { PropsWithChildren } from "react";

type SetChildType = {
  as: JSX.Element;
  to?: string;
};

export default function setChild({ as, to }: SetChildType) {
  if (to) {
    const As = ({ children, onClick, href, ref }: PropsWithChildren<any>) =>
      React.cloneElement(as, { ...as.props, onClick, href, ref }, children);
    return React.forwardRef(({ onClick, href, children }: any, ref: any) => (
      <As onClick={onClick} href={href}>
        {children}
      </As>
    ));
  }

  return ({ children }: PropsWithChildren<any>) =>
    React.cloneElement(as, { ...as.props }, children);
}

const MyButton = React.forwardRef(({ onClick, href }: any, ref: any) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Click Me
    </a>
  );
});
