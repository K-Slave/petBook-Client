import React from "react";
import styled from "styled-components";

const CommunitySectionBox = styled.section`
  margin-top: 56px;
  color: var(--black_01);
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
    h3 {
      font-size: 22px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  button {
    color: var(--black_01);
    font-size: 14px;
  }
`;
interface Props {
  title: string;
  sideElement?: React.ReactNode;
}

const CommunitySection = ({
  title,
  children,
  sideElement,
}: React.PropsWithChildren<Props>) => {
  return (
    <CommunitySectionBox>
      <div className="heading">
        <h3>{title}</h3>
        {sideElement}
      </div>
      {children}
    </CommunitySectionBox>
  );
};

CommunitySection.defaultProps = {
  sideElement: null,
};

export default CommunitySection;
