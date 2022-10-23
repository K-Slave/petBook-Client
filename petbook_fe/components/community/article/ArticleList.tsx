import { ArticleListResponse } from "@lib/API/petBookAPI/types/articleRequest";
import styled from "styled-components";
import ArticleItemBox from "./ArticleItemBox";

interface Props {
  posts: ArticleListResponse;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ArticleList = ({ posts }: Props) => {
  return (
    <Wrapper>
      {posts.map((post) => (
        <ArticleItemBox post={post} key={post.id} />
      ))}
    </Wrapper>
  );
};

export default ArticleList;
