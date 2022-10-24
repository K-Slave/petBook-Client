import { ArticleListResponse } from "@lib/API/petBookAPI/types/articleRequest";
import styled from "styled-components";
import ArticleLink from "./ArticleLink";

interface Props {
  posts: ArticleListResponse;
}

const ArticleListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ArticleList = ({ posts }: Props) => {
  return (
    <ArticleListDiv>
      {posts.map((post) => (
        <ArticleLink post={post} key={post.id} />
      ))}
    </ArticleListDiv>
  );
};

export default ArticleList;
