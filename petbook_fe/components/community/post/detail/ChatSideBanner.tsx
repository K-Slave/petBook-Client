/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import styled from "styled-components";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

const Wrapper = styled.div`
  position: relative;
  width: 197px;
  border-radius: 16px;
  flex-shrink: 0;
  background: #ff6e4e;
  img {
    height: 197px;
    object-fit: cover;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  a {
    border-bottom: 1px solid #fff;
    align-self: center;
    padding-bottom: 2px;
  }
`;

const Bottom = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 30px;
  padding-bottom: 30px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 197px;
  background: linear-gradient(0deg, #ff6e4e 0%, rgba(255, 110, 78, 0) 100%);
`;

const ChatSideBanner = () => {
  return (
    <Wrapper>
      <img src={avatar} alt="user profile" />
      <Background />
      <Bottom>
        <p>
          arin님과 1:1 대화를 <br />
          나눠보세요!
        </p>
        <Link href="#">
          <a>1:1 대화 신청</a>
        </Link>
      </Bottom>
    </Wrapper>
  );
};

export default ChatSideBanner;
