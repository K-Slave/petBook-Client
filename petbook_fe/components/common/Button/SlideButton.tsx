// import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
// import styled from "styled-components";
// import { MouseEventHandler, useEffect } from "react";
// import { Button } from "./Button";

// const SlideButtonBox = styled.div`
//   display: flex;
//   align-items: center;

//   position: relative;

//   height: 14.875rem;

//   margin-top: 3.1875rem;

//   .Slide__Button__Display {
//     overflow: hidden;
//   }
// `;

// const SlidePushButton = styled(Button)`
//   display: flex;
//   align-items: center;

//   transition: all 0.3s ease-in-out;
//   transform: translate3d(0, 3.5rem, 0);

//   padding: 1rem 0.3rem;

//   border-radius: 1rem;

//   background: #cecece;
//   color: #fff;
// `;

// type SlideButtonProps = {
//   direction: string;
//   onClick?: MouseEventHandler;
//   pageNation?: number;
//   page?: number;
// };

// export default function SlideButton(props: SlideButtonProps) {
//   const { direction, onClick, pageNation, page } = props;

//   const styleRender = () => {
//     if (direction === "left" && page === 0) {
//       return { background: "#cecece" };
//     }
//     // if (direction === "right" && pageNation === page) {
//     //   return { background: "#cecece" };
//     // }

//     return { background: "#087f5b" };
//   };

//   return (
//     <SlideButtonBox className="Slide__Button__Box" onClick={onClick}>
//       <div className="Slide__Button__Display">
//         <SlidePushButton
//           className="Slide__Button"
//           style={styleRender()}
//           {...props}
//         >
//           {direction === "left" && <AiOutlineLeft />}
//           {direction === "right" && <AiOutlineRight />}
//         </SlidePushButton>
//       </div>
//     </SlideButtonBox>
//   );
// }

const donter = "";

export default donter;
