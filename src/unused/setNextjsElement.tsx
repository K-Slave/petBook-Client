// import React, { PropsWithChildren } from "react";

// type SetChildType = {
//   as: JSX.Element;
//   to?: string;
//   embedProps?: any;
// };

// export default function setNextjsElement({ as, embedProps }: SetChildType) {
//   return ({ children }: PropsWithChildren<any>) =>
//     React.cloneElement(as, { ...as.props, ...embedProps }, children);
// }

// export function setNextjsForwardRef({ as, to, embedProps }: SetChildType) {
//   const As = ({ children, onClick, href }: PropsWithChildren<any>) => {
//     return React.cloneElement(
//       as,
//       { onClick, href, ...as.props, ...embedProps },
//       children
//     );
//   };

//   return React.forwardRef(({ onClick, href, children }: any, ref) => {
//     return (
//       <As onClick={onClick} href={href} {...as.props} {...embedProps}>
//         {children}
//       </As>
//     );
//   });
// }

export const temp = 0;
export const temp1 = 1;
