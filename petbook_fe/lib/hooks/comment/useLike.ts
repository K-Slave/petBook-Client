import { tokenContext } from "@pages/community/list/[articleId]";
import { useContext, useState } from "react";

export interface updateIsLikedParams {
  commentId: number;
  isLiked: boolean;
  initialLiked: boolean;
}

export interface useLikeParams {
  id: number;
  initialLiked: boolean;
  updateIsLiked: (params: updateIsLikedParams) => void;
}

export default function useLike({
  id,
  initialLiked,
  updateIsLiked,
}: useLikeParams) {
  const token = useContext(tokenContext);
  const [isLiked, setIsLiked] = useState(initialLiked);
  const clickLikeButton = () => {
    if (token === null) {
      alert("🔒 로그인해주세요!");
      return;
    }
    updateIsLiked({ commentId: id, isLiked: !isLiked, initialLiked });
    setIsLiked((state) => !state);
  };

  return {
    isLiked,
    clickLikeButton,
  };
}
