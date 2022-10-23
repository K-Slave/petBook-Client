/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/no-array-index-key */
import styled from "styled-components";
import PostItem from "./PostItem";

interface PostListProps {
  posts: any;
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PostList = ({ posts }: PostListProps) => {
  return (
    <List>
      {posts.map((item: any, index: number) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <PostItem {...item} key={index} />
      ))}
    </List>
  );
};

export default PostList;
