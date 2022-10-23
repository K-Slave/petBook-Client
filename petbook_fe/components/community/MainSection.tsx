import React, { MutableRefObject } from "react";
import styled from "styled-components";

const Section = styled.section`
  padding-bottom: 150px;
`;

const SectionH2 = styled.h2`
  margin-bottom: 10px;

  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #ff2e00;
`;

const SectionParagraph = styled.p`
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

const MainSection = ({ sectionRef, title, description, children }: Props) => {
  return (
    <Section ref={sectionRef}>
      <SectionH2>{title}</SectionH2>
      <SectionParagraph>{description}</SectionParagraph>
      {children}
    </Section>
  );
};

export default MainSection;

MainSection.defaultProps = {
  sectionRef: undefined,
};
