import { articleRequest } from "@lib/API/petBookAPI";
import type { Key } from "@lib/hooks/common/useResource";
import type { Parameters } from ".";

const articleKeys = {
  list: (...args: Parameters<typeof articleRequest.article_list>): Key => [
    "ARTICLE_LIST",
    { ...args[0].params, popular: false },
  ],
  detail: (...args: Parameters<typeof articleRequest.article_detail>): Key => [
    "ARTICLE_DETAIL",
    args[0].pathParam,
  ],
  search: (...args: Parameters<typeof articleRequest.article_search>): Key => [
    "ARTICLE_SEARCH",
    args[0].params,
  ],
  popular: (...args: Parameters<typeof articleRequest.article_list>): Key => [
    "POPULAR_ARTICLE_LIST",
    { ...args[0].params, popular: true },
  ],
  preview: (...args: Parameters<typeof articleRequest.article_list>): Key => [
    "ARTICLE_LIST_PREVIEW",
    { categoryId: args[0].params.categoryId },
  ],
};

export const ARTICLE_DETAIL = {
  name: "ARTICLE_DETAIL" as const,
  createKey: articleKeys.detail,
  fetcher: articleRequest.article_detail,
};

export const ARTICLE_LIST = {
  name: "ARTICLE_LIST" as const,
  createKey: articleKeys.list,
  fetcher: articleRequest.article_list,
};

export const ARTICLE_SEARCH = {
  name: "ARTICLE_SEARCH" as const,
  createKey: articleKeys.search,
  fetcher: articleRequest.article_search,
};

export const POPULAR_ARTICLE_LIST = {
  name: "POPULAR_ARTICLE_LIST" as const,
  createKey: articleKeys.popular,
  fetcher: articleRequest.article_list,
};

export const ARTICLE_LIST_PREVIEW = {
  name: "ARTICLE_LIST_PREVIEW" as const,
  createKey: articleKeys.preview,
  fetcher: articleRequest.article_list,
};
