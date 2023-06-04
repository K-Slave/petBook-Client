import { css } from "styled-components";

const LoaderCommonStyle = css`
  .Loader__Layer {
    position: fixed;
    z-index: 9999;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.1);

    touch-action: none;
    pointer-events: none;
  }

  .Loader {
    position: relative;
    top: -10px;
    left: -4px;
  }
  .Loader > div:nth-child(1) {
    top: 20px;
    left: 0;
    -webkit-animation: Loader 1.2s -0.84s infinite ease-in-out;
    animation: Loader 1.2s -0.84s infinite ease-in-out;
  }
  .Loader > div:nth-child(2) {
    top: 13.63636px;
    left: 13.63636px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: Loader 1.2s -0.72s infinite ease-in-out;
    animation: Loader 1.2s -0.72s infinite ease-in-out;
  }
  .Loader > div:nth-child(3) {
    top: 0;
    left: 20px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-animation: Loader 1.2s -0.6s infinite ease-in-out;
    animation: Loader 1.2s -0.6s infinite ease-in-out;
  }
  .Loader > div:nth-child(4) {
    top: -13.63636px;
    left: 13.63636px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: Loader 1.2s -0.48s infinite ease-in-out;
    animation: Loader 1.2s -0.48s infinite ease-in-out;
  }
  .Loader > div:nth-child(5) {
    top: -20px;
    left: 0;
    -webkit-animation: Loader 1.2s -0.36s infinite ease-in-out;
    animation: Loader 1.2s -0.36s infinite ease-in-out;
  }
  .Loader > div:nth-child(6) {
    top: -13.63636px;
    left: -13.63636px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: Loader 1.2s -0.24s infinite ease-in-out;
    animation: Loader 1.2s -0.24s infinite ease-in-out;
  }
  .Loader > div:nth-child(7) {
    top: 0;
    left: -20px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-animation: Loader 1.2s -0.12s infinite ease-in-out;
    animation: Loader 1.2s -0.12s infinite ease-in-out;
  }
  .Loader > div:nth-child(8) {
    top: 13.63636px;
    left: -13.63636px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: Loader 1.2s 0s infinite ease-in-out;
    animation: Loader 1.2s 0s infinite ease-in-out;
  }
  .Loader > div {
    background-color: #fff;
    width: 4px;
    height: 35px;
    border-radius: 2px;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
    width: 5px;
    height: 15px;
  }
`;

export default LoaderCommonStyle;
