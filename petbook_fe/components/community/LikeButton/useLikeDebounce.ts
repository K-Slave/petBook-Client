import { LikeButtonProps } from "@components/community/LikeButton";
import debounce from "@lib/modules/debounce";
import {
  MouseEventHandler,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import useUserId from "@lib/hooks/article/useUserId";
import { useSetResource } from "@lib/hooks/common/useResource";
import { useMutation } from "@tanstack/react-query";

export interface updateIsLikedParams {
  commentId: number;
  isLiked: boolean;
  initialLiked: MutableRefObject<boolean>;
}

function useUpdateLikeDebounce({
 createLike,
deleteLike
}: Pick<LikeButtonProps, "createLike" | "deleteLike">) {
  const { mutate: createLikeComment } = useMutation(createLike);
  const { mutate: deleteLikeComment } = useMutation(deleteLike);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const updateIsLiked = debounce(
    ({ commentId, isLiked, initialLiked }: updateIsLikedParams) => {
      if (isLiked === initialLiked.current) return;
      if (!isLiked) {
        deleteLikeComment(
          {
            pathParam: `${commentId}`,
          },
          {
            onSuccess: () => {
              initialLiked.current = false;
            },
            onError: () => {
              alert("좋아요 취소에 실패했습니다. 다시 시도해주세요 😢");
            },
          }
        );
      } else {
        createLikeComment(
          {
            pathParam: `${commentId}`,
          },
          {
            onSuccess: () => {
              initialLiked.current = true;
            },
            onError: () => {
              alert("좋아요에 실패했습니다. 다시 시도해주세요 😢");
            },
          }
        );
      }
    },
    1300,
    timeoutId
  );
  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);
  return updateIsLiked;
}

export default function useLikeDebounce({
  id,
  liked,
  likeCount,
  createLike,
  deleteLike
}: LikeButtonProps) {
  const userId = useUserId();
  const initialLiked = useRef(liked);
  const [isLiked, setIsLiked] = useState(liked);
  const updateIsLiked = useUpdateLikeDebounce({
    createLike,
    deleteLike
  });
  const clickLikeButton: MouseEventHandler<HTMLButtonElement> = () => {
    if (userId === null) {
      alert("🔒 로그인해주세요!");
      return;
    }
    updateIsLiked({ commentId: id, isLiked: !isLiked, initialLiked });
    setIsLiked((state) => !state);
  };

  return {
    isLiked,
    clickLikeButton,
    computedLikeCount:
      likeCount + (!liked && isLiked ? 1 : liked && !isLiked ? -1 : 0),
  };
}
