import styled, { css } from "styled-components";
import type { TypographyVariant } from ".";

const TextH1 = css`
  font-size: 2.875rem;
  line-height: 3.5rem;
  letter-spacing: -0.0862rem;
`;

export const TextH1Bold = css`
  ${TextH1};
  font-weight: bold;
`;

export const TextH1Medium = css`
  ${TextH1};
  font-weight: normal;
`;

const TextH2 = css`
  font-size: 2.125rem;
  letter-spacing: -0.0638rem;
`;

export const TextH2Bold = css`
  ${TextH2};
  line-height: 3.125rem;
  font-weight: bold;
`;

export const TextH2Medium = css`
  ${TextH2};
  line-height: 2.5rem;
  font-weight: normal;
`;

const TextH3 = css`
  font-size: 1.375rem;
  line-height: 2rem;
  letter-spacing: -0.0275rem;
`;

export const TextH3Bold = css`
  ${TextH3};
  font-weight: bold;
`;

export const TextH3Medium = css`
  ${TextH3};
  font-weight: normal;
`;

const TextH4 = css`
  font-size: 1.125rem;
  line-height: 1.5rem;
`;

export const TextH4Bold = css`
  ${TextH4};
  font-weight: bold;
  letter-spacing: -0.0225rem;
`;

export const TextH4Medium = css`
  ${TextH4};
  font-weight: normal;
`;

const TextBodyDefault = css`
  font-size: 1rem;
  letter-spacing: -0.02rem;
`;

export const TextBodyDefaultBold = css`
  ${TextBodyDefault};
  font-weight: bold;
  line-height: 1.5rem;
`;

export const TextBodyDefaultMedium = css`
  ${TextBodyDefault};
  font-weight: normal;
  line-height: 160%;
`;

const TextBodySmall = css`
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: -0.0175rem;
`;

export const TextBodySmallBold = css`
  ${TextBodySmall};
  font-weight: bold;
`;

export const TextBodySmallMedium = css`
  ${TextBodySmall};
  font-weight: normal;
`;

export const TextLabel = css`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.02rem;
`;

export const TextButtonDefault = css`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.02rem;
`;

export const TextButtonSmall = css`
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.0175rem;
`;

export const TextTagSmall = css`
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: -0.0125rem;
`;

export const TextH3Bold22 = css`
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
`;

export const TextH4Bold18 = css`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
`;

export const TextBodyMedium14 = css`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  letter-spacing: -0.02em;
`;

const getFontStyle = (variant: TypographyVariant) => {
  switch (variant) {
    case "h1-bold":
      return TextH1Bold;
    case "h1-medium":
      return TextH1Medium;
    case "h2-bold":
      return TextH2Bold;
    case "h2-medium":
      return TextH2Medium;
    case "h3-bold":
      return TextH3Bold;
    case "h3-medium":
      return TextH3Medium;
    case "h4-bold":
      return TextH4Bold;
    case "h4-medium":
      return TextH4Medium;
    case "body-default-bold":
      return TextBodyDefaultBold;
    case "body-default-medium":
      return TextBodyDefaultMedium;
    case "body-small-bold":
      return TextBodySmallBold;
    case "body-small-medium":
      return TextBodySmallMedium;
    case "label":
      return TextLabel;
    case "button-default":
      return TextButtonDefault;
    case "button-small":
      return TextButtonSmall;
    case "tag-small":
      return TextTagSmall;
    default:
      return undefined;
  }
};

export const StyledTypography = styled.div<{ variant: TypographyVariant }>`
  ${({ variant }) => getFontStyle(variant)}
`;
