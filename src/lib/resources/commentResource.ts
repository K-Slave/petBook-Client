import { commentRequest } from "@lib/API/petBookAPI";
import { commentQueryKey } from "@lib/globalConst/queryKey";
import { createResource } from "@lib/hooks/common/useResource";

export const COMMENT_LIST = createResource({
  name: commentQueryKey.list,
  fetcher: commentRequest.comment_list,
});

// const commentKeys = {
//   list: (
//     articleId: Parameters<
//       typeof commentRequest.comment_list
//     >[0]["params"]["articleId"]
//   ): Key => ["ARTICLE_DETAIL", articleId],
// };
