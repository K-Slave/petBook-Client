import { NextPage } from "next";
import styled from "styled-components";
import HtmlHeader from "../../components/common/HtmlHeader";
import CommentSection from "../../components/community/comment/CommentSection";
import ChatSideBanner from "../../components/community/detail/ChatSideBanner";
import DetailSection from "../../components/community/detail/DetailSection";
import ImageSliderModal from "../../components/community/detail/ImageSliderModal";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

const dummyImage1 =
  "https://images.unsplash.com/photo-1607599193024-de4a7601aefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
const dummyImage2 =
  "https://images.unsplash.com/photo-1629898569904-669319348211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
const dummyImage3 =
  "https://images.unsplash.com/photo-1612267168669-679c961c5b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
const dummy = {
  avatar,
  username: "arin",
  date: "2022.08.30",
  title: "질문이 들어갑니다 질문이 들어갑니다 질문이 질문이 들어갑니다",
  content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다  내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다 `,
  tags: ["태그", "태그"],
  images: [avatar, dummyImage1, dummyImage2, dummyImage3],
};

const PostDetail: NextPage = () => {
  return (
    <>
      <HtmlHeader />
      <Main>
        <ChatSideBanner />
        <Wrapper>
          <DetailSection {...dummy} />
          <CommentSection />
        </Wrapper>
      </Main>
      <ImageSliderModal images={dummy.images} />
    </>
  );
};

export default PostDetail;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin: 40px auto;
  width: 90vw;
  max-width: 1096px;
`;

const Wrapper = styled.div`
  width: 847px;
`;
