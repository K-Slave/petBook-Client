import { articleRequest } from "@lib/API/petBookAPI";
import type { Key } from "@lib/hooks/common/useResource";
import type { Parameters } from ".";

const articleKeys = {
  detail: (...args: Parameters<typeof articleRequest.article_detail>): Key => [
    "ARTICLE_DETAIL",
    args[0].pathParam,
  ],
};

export const ARTICLE_DETAIL = {
  name: "ARTICLE_DETAIL" as const,
  createKey: articleKeys.detail,
  fetcher: articleRequest.article_detail,
};
