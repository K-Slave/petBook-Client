import { BsThreeDotsVertical, BsArrowReturnRight } from "react-icons/bs";
import useResource from "@lib/hooks/common/useResource";
import { COMMENT_LIST } from "@pages/community/[articleId]";
import { useRouter } from "next/router";
import { CommentItem } from "@lib/API/petBookAPI/types/commentRequest";
import DetailCommonInfo from "../DetailCommonInfo";
import { CommentListDiv, ItemDiv } from "./styled/styledCommentList";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

const CommentList = () => {
  const router = useRouter();
  const articleId = router.query.articleId as string;
  const { data } = useResource({
    key: COMMENT_LIST.key,
    fetcher: () =>
      COMMENT_LIST.fetcher({
        articleId,
      }),
  });

  return (
    <CommentListDiv>
      {data?.data.map((comment) => (
        <>
          <CommentList.Item
            comment={comment.parent}
            isChild=""
            key={comment.parent.id}
          />
          {comment.children.map((child) => (
            <CommentList.Item comment={child} isChild="true" key={child.id} />
          ))}
        </>
      ))}
    </CommentListDiv>
  );
};

// ----------------------------------------------------

interface ItemProps {
  comment: CommentItem;
  isChild: string;
}

const Item = ({ comment, isChild }: ItemProps) => {
  const { user, createdAt, content, likeCount, id, articleId } = comment;
  return (
    <ItemDiv isChild={isChild}>
      {isChild && <BsArrowReturnRight />}
      <div>
        <div className="Item_Row">
          <DetailCommonInfo
            username={user.nickname}
            date={createdAt.split("T")[0]}
            avatar={avatar}
          />
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
