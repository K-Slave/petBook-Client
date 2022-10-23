import React, { MutableRefObject } from "react";
import styled from "styled-components";

interface MainSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  sectionRef?: MutableRefObject<HTMLElement | null>;
}

const Section = styled.section`
  padding-bottom: 150px;
`;

const Heading = styled.h2`
  color: #ff2e00;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 32px;
`;

const MainSection = ({
  sectionRef,
  title,
  description,
  children,
}: MainSectionProps) => {
  return (
    <Section ref={sectionRef}>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      {children}
    </Section>
  );
};

export default MainSection;

MainSection.defaultProps = {
  sectionRef: undefined,
};
