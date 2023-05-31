import styled from "styled-components";

export const LandingSecondSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: calc(50vh);
  margin: 6.25rem 0;

  /* background-color: var(--bg_white_01); */
  background-color: #fdfcf7;
  border: 1px solid #ebebeb;

  & > * {
  }
`;

export const LandingSecondDescP = styled.p`
  width: 51.8438rem;
  height: 22.3981rem;

  font-size: 2rem;
  font-weight: 700;
  line-height: 1.6;
  color: #191f28;
  text-align: center;

  animation: 0.5s slideUp ease-in-out 1;
  -o-animation: 0.5s slideUp ease-in-out 1;
  -moz-animation: 0.5s slideUp ease-in-out 1;
  -webkit-animation: 0.5s slideUp ease-in-out 1;

  @media screen and (max-width: 845px) {
    width: 35.7231rem;
    height: 12.375rem;
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 1.5;
  }

  @media screen and (max-width: 574px) {
    width: 22.5rem;
    height: 8.3981rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.4;
  }

  .Petbook {
    font-weight: bold;
    color: #ff6f61;
  }
`;
