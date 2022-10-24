import React, { MutableRefObject } from "react";
import styled from "styled-components";

const CommunitySectionBox = styled.section`
  padding-bottom: 150px;
`;

const CommunitySectionH2 = styled.h2`
  margin-bottom: 10px;

  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #ff2e00;
`;

const CommunitySectionParagraph = styled.p`
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 30px;
`;

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
  sectionRef?: MutableRefObject<HTMLElement | null>;
}

const CommunitySection = ({
  sectionRef,
  title,
  description,
  children,
}: Props) => {
  return (
    <CommunitySectionBox ref={sectionRef}>
      <CommunitySectionH2>{title}</CommunitySectionH2>
      <CommunitySectionParagraph>{description}</CommunitySectionParagraph>
      {children}
    </CommunitySectionBox>
  );
};

export default CommunitySection;

CommunitySection.defaultProps = {
  sectionRef: undefined,
};
