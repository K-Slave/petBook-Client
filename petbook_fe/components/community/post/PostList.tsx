import styled from "styled-components";
import PostItem from "./PostItem";

const dummy = [
  {
    avatar: "",
    username: "arin",
    date: "2022.08.24",
    title:
      "질문이 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다",
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다`,
    tagList: ["태그", "태그", "태그"],
    likeCnt: 1,
    commentCnt: 1,
    viewCnt: 1,
    previewImage: "",
  },
  {
    avatar: "",
    username: "arin",
    date: "2022.08.24",
    title:
      "질문이 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다",
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다`,
    tagList: ["태그", "태그", "태그"],
    likeCnt: 1,
    commentCnt: 1,
    viewCnt: 1,
    previewImage: "image",
  },
  {
    avatar: "",
    username: "arin",
    date: "2022.08.24",
    title:
      "질문이 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다",
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다`,
    tagList: ["태그", "태그", "태그"],
    likeCnt: 1,
    commentCnt: 1,
    viewCnt: 1,
    previewImage: "",
  },
  {
    avatar: "",
    username: "arin",
    date: "2022.08.24",
    title:
      "질문이 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다",
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다`,
    tagList: ["태그", "태그", "태그"],
    likeCnt: 1,
    commentCnt: 1,
    viewCnt: 1,
    previewImage: "image",
  },
  {
    avatar: "",
    username: "arin",
    date: "2022.08.24",
    title:
      "질문이 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다",
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다`,
    tagList: ["태그", "태그", "태그"],
    likeCnt: 1,
    commentCnt: 1,
    viewCnt: 1,
    previewImage: "",
  },
  {
    avatar: "",
    username: "arin",
    date: "2022.08.24",
    title:
      "질문이 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다",
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다`,
    tagList: ["태그", "태그", "태그"],
    likeCnt: 1,
    commentCnt: 1,
    viewCnt: 1,
    previewImage: "image",
  },
];

const PostList = () => {
  return (
    <>
      <List>
        {dummy.map((item, index) => (
          <PostItem {...item} key={index} />
        ))}
      </List>
    </>
  );
};

export default PostList;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
