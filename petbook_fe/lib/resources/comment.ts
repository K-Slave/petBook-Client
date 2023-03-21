import { commentRequest } from "@lib/API/petBookAPI";
import type { Key } from "@lib/hooks/common/useResource";
import type { Parameters } from ".";

const commentKeys = {
  list: (
    articleId: Parameters<
      typeof commentRequest.comment_list
    >[0]["params"]["articleId"]
  ): Key => ["ARTICLE_DETAIL", articleId],
};

export const COMMENT_LIST = {
  name: "COMMENT_LIST" as const,
  createKey: commentKeys.list,
  fetcher: commentRequest.comment_list,
};
