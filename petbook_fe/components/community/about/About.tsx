import styled from "styled-components";

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

export default About;

const Wrapper = styled.div`
  height: 200px;
  background-color: #ff6e4e;
  display: flex;
  align-items: center;
  & > div {
    width: 90vw;
    max-width: 1280px;
    margin: 0 auto;
  }
  p {
    color: white;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
`;
