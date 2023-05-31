import styled from "styled-components";

export const LandingNoticeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-bottom: 5rem;
`;

export const LandingNoticeIframe = styled.iframe`
  width: 100%;
  height: 37.5rem;

  @media screen and (max-width: 845px) {
    height: 28.125rem;
  }

  @media screen and (max-width: 574px) {
    height: 18.75rem;
  }

  border: none;
`;

export const LandingNoticeContentP = styled.p`
  padding: 1.25rem 0 2.5rem 0;

  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.4;
  color: #191f28;

  .Notice__Last {
    display: block;
    padding: 3.75rem 0;
    padding-top: 1.875rem;
  }

  @media screen and (max-width: 845px) {
    font-size: 1.625rem;
    font-weight: 600;
    line-height: 1.3;

    .Notice__Last {
      padding: 2.5rem 0;
      padding-top: 1.5625rem;
    }
  }

  @media screen and (max-width: 574px) {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;

    .Notice__Last {
      padding: 1.25rem 0;
      padding-top: 1.25rem;
    }
  }
`;
