import { ArticleListResponse } from "@lib/API/petBookAPI/types/articleRequest";
import styled from "styled-components";
import PostItem from "./PostItem";

interface Props {
  posts: ArticleListResponse;
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PostList = ({ posts }: Props) => {
  return (
    <List>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </List>
  );
};

export default PostList;
