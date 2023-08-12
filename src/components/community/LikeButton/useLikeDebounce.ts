import { useMutation } from "@tanstack/react-query";
import {
  MouseEventHandler,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { LikeButtonProps } from "@components/community/LikeButton";
import useUserInfo from "@lib/hooks/common/useUserInfo";
import debounce from "@lib/modules/debounce";

export interface updateIsLikedParams {
  commentId: number;
  isLiked: boolean;
  initialLiked: MutableRefObject<boolean>;
}

function useUpdateLikeDebounce({
  createLike,
  deleteLike,
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
  deleteLike,
}: LikeButtonProps) {
  const { userData } = useUserInfo();
  const initialLiked = useRef(liked);
  const [isLiked, setIsLiked] = useState(liked);
  const updateIsLiked = useUpdateLikeDebounce({
    createLike,
    deleteLike,
  });
  const clickLikeButton: MouseEventHandler<HTMLButtonElement> = () => {
    if (!userData) {
      alert("🔒 로그인해주세요!");
      return;
    }
    updateIsLiked({ commentId: id, isLiked: !isLiked, initialLiked });
    setIsLiked((state) => !state);
  };

  return {
    isLiked: userData ? isLiked : false,
    clickLikeButton,
    computedLikeCount: userData
      ? likeCount + (!liked && isLiked ? 1 : liked && !isLiked ? -1 : 0)
      : likeCount,
  };
}
