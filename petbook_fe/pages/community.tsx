import { NextPage } from "next";
import styled from "styled-components";
import HtmlHeader from "../components/common/HtmlHeader";
import About from "../components/community/about/About";
import MainSection from "../components/community/MainSection";
import PopularPostList from "../components/community/popular/PopularPostList";
import WeekFilter from "../components/community/popular/WeekFilter";
import PostFilter from "../components/community/post/PostFilter";
import PostList from "../components/community/post/PostList";
import VoteList from "../components/community/vote/VoteList";
import WriteButton from "../components/community/WriteButton";

const Community: NextPage = () => {
  return (
    <>
      <HtmlHeader />
      <Container>
        <About />
        <Sections>
          <MainSection
            title="Talk"
            description="지금 HOT한 투표! 당신의 선택은?"
          >
            <VoteList />
          </MainSection>
          <MainSection
            title="Community"
            description="매주 인기 게시물을 확인하세요"
          >
            <WeekFilter />
            <PopularPostList />
          </MainSection>
          <MainSection
            title="Live talk"
            description="실시간 업로드되는 유저들의 이야기"
          >
            <PostFilter />
            <PostList />
          </MainSection>
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
