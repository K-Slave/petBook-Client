import styled from "styled-components";

export const LandingFirstSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;

  padding-top: 6.5625rem;

  @media screen and (max-width: 768px) {
    padding-top: 4.6875rem;
  }
`;

export const LandingFirstTitleH1 = styled.h1`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 6.25rem;

  animation: 0.5s fadeIn ease-in-out 1;
  -o-animation: 0.5s fadeIn ease-in-out 1;
  -moz-animation: 0.5s fadeIn ease-in-out 1;
  -webkit-animation: 0.5s fadeIn ease-in-out 1;

  animation-delay: 1.5s;
  -o-animation-delay: 1.5s;
  -moz-animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;

  span {
    text-align: center;

    line-height: 1.4;
    color: #202020;
  }

  .Landing__Title {
    font-size: 4.125rem;
    font-weight: bold;
  }

  .Landing__Subtitle {
    padding-top: 0.625rem;

    font-size: 2.1875rem;
    font-weight: 500;
  }

  @media screen and (max-width: 1020px) {
    .Landing__Title {
      width: 26.4375rem;
      font-size: 3.125rem;
      line-height: 1.3;
    }

    .Landing__Subtitle {
      font-size: 1.75rem;
      line-height: 1.3;
    }
  }

  @media screen and (max-width: 768px) {
    .Landing__Title {
      min-width: 26.4375rem;
      line-height: 1.2;
    }

    .Landing__Subtitle {
      line-height: 1.2;
    }
  }
`;

export const LandingImageBoxDiv = styled.div`
  display: flex;
  justify-content: center;
`;
