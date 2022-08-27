import styled from "styled-components";
import PostItem from "./PostItem";

interface PostListProps {
  posts: any;
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <List>
      {posts.map((item: any, index: number) => (
        <PostItem {...item} key={index} />
      ))}
    </List>
  );
};

export default PostList;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
