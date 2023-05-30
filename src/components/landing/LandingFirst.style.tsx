import styled from "styled-components";

export const LandingFirstSection = styled.section`
  position: relative;
  width: 100%;

  padding-top: 6.5625rem;
`;

export const LandingFirstTitleH1 = styled.h1`
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 6.25rem;

  animation: 0.5s slideUp ease-in-out 1;
  -o-animation: 0.5s slideUp ease-in-out 1;
  -moz-animation: 0.5s slideUp ease-in-out 1;
  -webkit-animation: 0.5s slideUp ease-in-out 1;

  animation-delay: 1.5s;
  -o-animation-delay: 1.5s;
  -moz-animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;

  span {
    text-align: center;
    font-size: 4.125rem;
    font-weight: bold;
    line-height: 1.4;
    color: #202020;
  }

  @media screen and (max-width: 1020px) {
    span {
      width: 26.4375rem;
      font-size: 3.125rem;
      line-height: 1.3;
    }
  }

  @media screen and (max-width: 768px) {
    span {
      min-width: 26.4375rem;
      line-height: 1.2;
    }
  }

  @media screen and (max-width: 368px) {
    span {
      min-width: 20.9375rem;
      font-size: 2.8125rem;
      line-height: 1.1;
    }
  }
`;

export const LandingImageBoxDiv = styled.div`
  display: flex;
  justify-content: center;
`;
