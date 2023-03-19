// import React from "react";
// import HeaderWrap from "../Design/Desktop/Header/HeaderWrap";
// import LogoButton from "../Design/Desktop/Header/LogoButton";
// import PersonalMenu from "../Design/Desktop/Header/PersonalButton";
// import NavMenu from "../DOMStructure/NavMenu.unused";

// type Props = {
//   path: string;
// };

// const Header = ({ path }: Props) => {
//   const defaultValue = {
//     pages: ["/none", "/none"],
//     pageNames: ["토끼", "햄스터"],
//   };

//   const rightValue = {
//     pages: "/login",
//     pageNames: "로그인",
//   };

//   return (
//     <NavMenu
//       InputWrap={<HeaderWrap />}
//       InputLeftSide={<LogoButton />}
//       InputMenu={
//         <div
//           style={{
//             display: "flex",
//             width: "100%",
//             height: "100%",
//           }}
//         />
//       }
//       InputButton={<PersonalMenu />}
//       InputRightSide={<PersonalMenu />}
//       to={defaultValue.pages}
//       name={defaultValue.pageNames}
//       currentPath={path}
//       rightSideTo={rightValue.pages}
//       rightSideName={rightValue.pageNames}
//       rightSideCurrentPath={path}
//     />
//   );
// };

// export default React.memo(Header);
