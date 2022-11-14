import React from "react";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <AboutSectionBox>
      <div>
        <p>
          커뮤니티에 대한 간단한 설명 <br />
          2줄 정도
        </p>
      </div>
    </AboutSectionBox>
  );
};

const AboutSectionBox = styled.section`
  display: flex;
  align-items: center;

  height: 200px;

  background-color: #ff6e4e;
  & > div {
    width: 90vw;
    max-width: 1280px;
    margin: 0 auto;
  }
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: white;
  }
`;

export default React.memo(AboutSection);
