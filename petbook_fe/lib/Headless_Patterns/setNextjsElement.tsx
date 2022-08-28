import React, { PropsWithChildren } from "react";
import localConsole from "../localConsole";

type SetChildType = {
  as: JSX.Element;
  to?: string;
  embedProps?: any;
};

export default function setNextjsElement({ as, to, embedProps }: SetChildType) {
  // console.log(as.props, "as.props");

  if (to || to === "") {
    const As = ({ children, onClick, href, ref }: PropsWithChildren<any>) =>
      React.cloneElement(
        as,
        { ...as.props, ...embedProps, onClick, href, ref },
        children
      );
    return React.forwardRef(({ onClick, href, children }: any, ref: any) => (
      <As onClick={onClick} href={href} ref={ref} {...as.props} {...embedProps}>
        {children}
      </As>
    ));
  }

  return ({ children }: PropsWithChildren<any>) =>
    React.cloneElement(as, { ...as.props, ...embedProps }, children);
}
