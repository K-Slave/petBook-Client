import { useState } from "react";

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
  const [isLiked, setIsLiked] = useState(initialLiked);
  const clickLikeButton = () => {
    updateIsLiked({ commentId: id, isLiked: !isLiked, initialLiked });
    setIsLiked((state) => !state);
  };

  return {
    isLiked,
    clickLikeButton,
  };
}
