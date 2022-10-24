import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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

const About = () => {
  return (
    <Wrapper>
      <div>
        <p>
          커뮤니티에 대한 간단한 설명 <br />
          2줄 정도
        </p>
      </div>
    </Wrapper>
  );
};

export default React.memo(About);