import { LikeButtonProps } from "@components/community/LikeButton";
import debounce from "@lib/modules/debounce";
import { tokenContext } from "@pages/community/list/[articleId]";
import {
  MouseEventHandler,
  MutableRefObject,
  useContext,
  useRef,
  useState,
} from "react";
import { useSetResource } from "../common/useResource";

export interface updateIsLikedParams {
  commentId: number;
  isLiked: boolean;
  initialLiked: MutableRefObject<boolean>;
}

function useUpdateLikeDebounce({
  CREATE_LIKE_RESOURCE,
  DELETE_LIKE_RESOURCE,
}: Pick<LikeButtonProps, "CREATE_LIKE_RESOURCE" | "DELETE_LIKE_RESOURCE">) {
  const { mutate: createLikeComment } = useSetResource(CREATE_LIKE_RESOURCE);
  const { mutate: deleteLikeComment } = useSetResource(DELETE_LIKE_RESOURCE);
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
    3000,
    timeoutId
  );
  return updateIsLiked;
}

export default function useLikeDebounce({
  id,
  liked,
  likeCount,
  CREATE_LIKE_RESOURCE,
  DELETE_LIKE_RESOURCE,
}: LikeButtonProps) {
  const token = useContext(tokenContext);
  const initialLiked = useRef(liked);
  const [isLiked, setIsLiked] = useState(liked);
  const updateIsLiked = useUpdateLikeDebounce({
    CREATE_LIKE_RESOURCE,
    DELETE_LIKE_RESOURCE,
  });
  const clickLikeButton: MouseEventHandler<HTMLButtonElement> = () => {
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
    computedLikeCount:
      likeCount + (!liked && isLiked ? 1 : liked && !isLiked ? -1 : 0),
  };
}
