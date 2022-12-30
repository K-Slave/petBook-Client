import { useState } from "react";

export interface updateIsLikedParams {
  commentId: number;
  isLiked: boolean;
  initialLiked: boolean;
}

export default function useLike({
  id,
  initialLiked,
  updateIsLiked,
}: {
  id: number;
  initialLiked: boolean;
  updateIsLiked: (params: updateIsLikedParams) => void;
}) {
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
