import { CommentItem } from "@lib/API/petBookAPI/types/commentRequest";
import useLikeDebounce from "@lib/hooks/comment/useLikeDebounce";
import {
  CreateLikeResource,
  DeleteLikeResource,
} from "@pages/community/list/[articleId]";
import LikeButtonBox from "./styled/styledLikeButton";
import { HeartFilledIcon, HeartBlankIcon } from "./HeartIcon";

export type LikeButtonProps = Pick<CommentItem, "id" | "likeCount"> & {
  liked: boolean;
  CREATE_LIKE_RESOURCE: CreateLikeResource;
  DELETE_LIKE_RESOURCE: DeleteLikeResource;
};

const LikeButton = ({
  id,
  liked,
  likeCount,
  CREATE_LIKE_RESOURCE,
  DELETE_LIKE_RESOURCE,
}: LikeButtonProps) => {
  const { isLiked, clickLikeButton, computedLikeCount } = useLikeDebounce({
    id,
    liked,
    likeCount,
    CREATE_LIKE_RESOURCE,
    DELETE_LIKE_RESOURCE,
  });
  return (
    <LikeButtonBox
      type="button"
      onClick={clickLikeButton}
      isLiked={isLiked ? "true" : ""}
    >
      {isLiked ? <HeartFilledIcon /> : <HeartBlankIcon />}
      <span className={`likeCount ${isLiked ? "active" : ""}`}>
        {computedLikeCount}
      </span>
    </LikeButtonBox>
  );
};
export default LikeButton;
