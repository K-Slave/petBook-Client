import styled from "styled-components";

export const LandingSecondSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 42.5rem;
  margin: 9.375rem 0;

  /* background-color: var(--bg_white_01); */
  background-color: #fdfcf7;
  border: 1px solid #ebebeb;

  @media screen and (max-width: 845px) {
    height: 33.125rem;
    margin: 6.25rem 0;
  }

  @media screen and (max-width: 574px) {
    height: 28.125rem;
    margin: 4.6875rem 0;
  }
`;

export const LandingSecondDescP = styled.p`
  width: 51.8438rem;

  font-size: 2rem;
  font-weight: 700;
  line-height: 1.6;
  color: #191f28;
  text-align: center;

  animation: 0.5s slideUp ease-in-out 1;
  -o-animation: 0.5s slideUp ease-in-out 1;
  -moz-animation: 0.5s slideUp ease-in-out 1;
  -webkit-animation: 0.5s slideUp ease-in-out 1;

  .Desc__Ext {
    display: block;
    padding-top: 2.5rem;
  }

  .Petbook {
    font-weight: bold;
    color: #ff6f61;
  }

  @media screen and (max-width: 845px) {
    width: 35.7231rem;
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 1.5;

    .Desc__Ext {
      padding-top: 1.875rem;
    }
  }

  @media screen and (max-width: 574px) {
    width: 22.5rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.4;

    .Desc__Ext {
      padding-top: 1.25rem;
    }
  }
`;
