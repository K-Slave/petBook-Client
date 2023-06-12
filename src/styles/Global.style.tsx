import { createGlobalStyle } from "styled-components";
import LoaderAnimation from "./Animation/LoaderAnimation.style";
import ErrorShakeAnimation from "./Animation/ErrorShakeAnimation.style";
import RotateAnimation from "./Animation/RotateAnimation.style";
import FadeAnimation from "./Animation/FadeAnimation.style";
import SlideAnimation from "./Animation/SlideAnimation.style";
import LoaderCommonStyle from "./common/Loader.style";
import ButtonCommonStyle from "./common/Button.style";
import LabelCommonStyle from "./common/Label.style";
import InputCommonStyle from "./common/Input.style";
import TextAreaCommonStyle from "./common/TextArea.style";

const NextGlobalStyle = createGlobalStyle`

//컬러설정
:root {
  /* black */
  --black_01: #383835;
  --black_02: #565653;
  --black_03: #777774;
  --black_04: #92928e;
  --black_05: #aaaaa7;
  --black_06: #c5c4bd;
  --black_07: #e0dfd9;

  /* bg */
  --bg_white_02: #f8f7f2;
  --bg_white_01: #eeede7;

  /* shadow */
  --shadow_01: #d6d3c5;


  /* primary */
  --primary: #ff6847;
  --primary-hover: #ff542f;

  /* secondary */
  --secondary: #ffcfc5;
  --secondary-hover: #ffcfc5;

  /* map */
  --map-primary: #f0892f;

  /* button */
  --disabled: #e0dfd9;
  --disabled-font: #c5c4bd;

  /* action */
  --success: #2bc128;
  --error: #ff0000;
}

* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  outline: none;

  font-family: Pretendard;

  font-style: normal;
  font-stretch: normal;
  background-repeat: no-repeat;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

html,
body {
  position: relative;

  width: 100%;
  min-width: 100vw;
  min-height: 100vh;

  margin: 0 auto;

  background-color: var(--bg_white_02);
}

#__next {
  position: relative;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
li,
ol {
  list-style: none;
  list-style-type: none;
}

hr {
  border: transparent;
  border-top: 1px solid #000;
}

img {
  @supports (font: -apple-system-body) and (-webkit-appearance: none) {
    img[loading="lazy"] {
      clip-path: inset(0.6px);
    }
  }
}

button {
    border: transparent;
    background-color: transparent;
    cursor: pointer;
}


body.dim::before {
  content: "";
  position: fixed;
  z-index: 11;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
}

.Header__Spacer {
  width: 100%;
  height: 122px;
}


.flex {
  display: flex;
  align-items: center;
}
.flex.right {
  justify-content: right;
}
.flex.center {
  justify-content: center;
}
.Float_Right {
  float: right;
}
.hidden {
  display: none;
}

.Review textarea {
  padding: 16px 22px 20px 48px;
  height: 100%;
  border-radius: 8px;
  border: solid 1px #fff;
  outline: none;
  box-sizing: border-box;
  resize: none;
  width: 100%;
}


//login
.Login_Title {
  text-align: center;
  img {
    width: 160px;
    height: 26px;
    margin: 0 auto;
  }
  p {
    font-size: 1.25rem;
    margin-bottom: 14px;
  }
  h2 {
    font-size: 1.375rem;
    margin-bottom: 32px;
    margin-top: 16px;
  }
}

// 모바일 환경 접속시 전역 스타일링
@media screen and (max-width: 600px) {
  html,
  body {
    position: relative;
  }
  // 사파리 ios web ui 뷰포트 이슈
  footer {
    padding-bottom: calc(1em + env(safe-area-inset-bottom));
  }
}

  ${LoaderCommonStyle}
  ${ButtonCommonStyle}
  ${LabelCommonStyle}
  ${InputCommonStyle}
  ${TextAreaCommonStyle}

  ${LoaderAnimation}
  ${ErrorShakeAnimation}
  ${RotateAnimation}
  ${FadeAnimation}
  ${SlideAnimation}
`;

export default NextGlobalStyle;
