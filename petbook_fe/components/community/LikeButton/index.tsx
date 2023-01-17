import { CommentItem } from "@lib/API/petBookAPI/types/commentRequest";
import useLikeDebounce from "@components/community/LikeButton/useLikeDebounce";
import {
  HeartFilledIcon,
  HeartBlankIcon,
} from "@components/common/icon/HeartIcon";
import { LikeRequest } from "@lib/API/petBookAPI/types/likeRequest";
import LikeButtonBox from "./styled";

export type LikeButtonProps = Pick<CommentItem, "id" | "likeCount"> & {
  liked: boolean;
  createLike: (payload: LikeRequest) => Promise<unknown>;
  deleteLike: (payload: LikeRequest) => Promise<unknown>;
};

const LikeButton = ({
  id,
  liked,
  likeCount,
  createLike,
  deleteLike
}: LikeButtonProps) => {
  const { isLiked, clickLikeButton, computedLikeCount } = useLikeDebounce({
    id,
    liked,
    likeCount,
    createLike,
    deleteLike
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
