import { NextPage } from "next";
import styled from "styled-components";
import HtmlHeader from "../../components/common/HtmlHeader";
import About from "../../components/community/about/About";
import PopularPostSection from "../../components/community/popular/PopularPostSection";
import PostSection from "../../components/community/post/PostSection";
import VoteSection from "../../components/community/vote/VoteSection";
import WriteButton from "../../components/community/WriteButton";

const Community: NextPage = () => {
  return (
    <>
      <HtmlHeader />
      <Container>
        <About />
        <Sections>
          <VoteSection />
          <PopularPostSection />
          <PostSection />
        </Sections>
        <WriteButton />
      </Container>
    </>
  );
};

export default Community;

const Container = styled.div`
  background-color: #fffbf4;
`;

const Sections = styled.div`
  width: 90vw;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 80px;
`;
