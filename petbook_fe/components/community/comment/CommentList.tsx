import styled from "styled-components";
import CommentItem, { Item } from "./CommentItem";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

const commentDummy = [
  {
    id: 1,
    username: "arin",
    date: "2022.08.30",
    avatar,
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다  내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다 `,
    recomment: false,
  },
  {
    id: 2,
    username: "arin",
    date: "2022.08.30",
    avatar,
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다  내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다 `,
    recomment: true,
  },
  {
    id: 3,
    username: "arin",
    date: "2022.08.30",
    avatar,
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다  내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다 `,
    recomment: true,
  },
  {
    id: 4,
    username: "arin",
    date: "2022.08.30",
    avatar,
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다  내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다 `,
    recomment: false,
  },
  {
    id: 5,
    username: "arin",
    date: "2022.08.30",
    avatar,
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다  내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다 `,
    recomment: false,
  },
];

const Wrapper = styled.div`
  border-radius: 16px;
  border: 1px solid #f5edde;
  & > ${Item}:first-child {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  & > ${Item}:last-child {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

const CommentList = () => {
  return (
    <Wrapper>
      {commentDummy.map((comment) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <CommentItem {...comment} key={comment.id} />
      ))}
    </Wrapper>
  );
};

export default CommentList;
