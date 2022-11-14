import { BsThreeDotsVertical, BsArrowReturnRight } from "react-icons/bs";
import { CommentListDiv, ItemDiv } from "./styled/styledCommentList";
import DetailCommonInfo from "../DetailCommonInfo";

const dummyAvatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

const commentDummy = [
  {
    id: 1,
    username: "arin",
    date: "2022.08.30",
    avatar: dummyAvatar,
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다  내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다 `,
    recomment: false,
  },
  {
    id: 2,
    username: "arin",
    date: "2022.08.30",
    avatar: dummyAvatar,
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다  내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다 `,
    recomment: true,
  },
  {
    id: 3,
    username: "arin",
    date: "2022.08.30",
    avatar: dummyAvatar,
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다  내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다 `,
    recomment: true,
  },
  {
    id: 4,
    username: "arin",
    date: "2022.08.30",
    avatar: dummyAvatar,
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다  내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다 `,
    recomment: false,
  },
  {
    id: 5,
    username: "arin",
    date: "2022.08.30",
    avatar: dummyAvatar,
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다  내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다내용이 들어갑니다 내용이 들어갑니다 `,
    recomment: false,
  },
];

const CommentList = () => {
  return (
    <CommentListDiv>
      {commentDummy.map((comment) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <CommentList.Item {...comment} key={comment.id} />
      ))}
    </CommentListDiv>
  );
};

// ----------------------------------------------------

interface ItemProps {
  id: number;
  username: string;
  avatar: string;
  date: string;
  content: string;
  recomment: boolean;
}

const Item = ({
  id,
  username,
  avatar,
  date,
  content,
  recomment,
}: ItemProps) => {
  return (
    <ItemDiv recomment={recomment}>
      {recomment && <BsArrowReturnRight />}
      <div>
        <div className="Item_Row">
          <DetailCommonInfo username={username} date={date} avatar={avatar} />
          <button type="button">
            <BsThreeDotsVertical />
          </button>
        </div>
        <p className="Item_Content">{content}</p>
        <div className="Item_Button_Box">
          <button type="button">대댓글 달기</button>
          <button type="button">좋아요 버튼</button>
        </div>
      </div>
    </ItemDiv>
  );
};

CommentList.Item = Item;

export default CommentList;
