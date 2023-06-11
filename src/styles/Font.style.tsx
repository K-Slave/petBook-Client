import Pretendard from "@components/Pretendard";
import { createGlobalStyle } from "styled-components";

const NextFontStyle = createGlobalStyle`
  * {
    font-family: ${Pretendard.style.fontFamily};

    font-style: normal;
    font-stretch: normal;
    background-repeat: no-repeat;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
`;

export default NextFontStyle;
