import { articleRequest } from "@lib/API/petBookAPI";
import { articleQueryKey } from "@lib/globalConst/queryKey";
import {
  createListResource,
  createRequest,
  createResource,
} from "@lib/hooks/common/useResource";
import { Resource } from ".";
import {
  ArticleListPayload,
  ArticleListResponse,
} from "@lib/API/petBookAPI/types/articleRequest";

export const ARTICLE_LIST = createResource({
  name: articleQueryKey.list,
  fetcher: articleRequest.article_list,
});

export const ARTICLE_DETAIL = createResource({
  name: articleQueryKey.detail,
  fetcher: articleRequest.article_detail,
});

export const ARTICLE_SEARCH = createResource({
  name: articleQueryKey.search,
  fetcher: articleRequest.article_search,
});

export const ARTICLE_POPULAR_LIST = createResource({
  name: articleQueryKey.popular,
  fetcher: articleRequest.article_list,
});

export const ARTICLE_LIST_PREVIEW = createListResource({
  name: articleQueryKey.preview,
  fetcher: articleRequest.article_list,
  listLength: 6,
});

export const ARTICLE_CREATE = createRequest({
  key: ["ARTICLE_CREATE"],
  requester: articleRequest.article_create,
});

// const articleKeys = {
//   list: (...args: Parameters<typeof articleRequest.article_list>): QueryKey => [
//     "ARTICLE_LIST",
//     { ...args[0].params, popular: false },
//   ],
//   detail: (
//     ...args: Parameters<typeof articleRequest.article_detail>
//   ): QueryKey => ["ARTICLE_DETAIL", args[0].pathParam],
//   search: (
//     ...args: Parameters<typeof articleRequest.article_search>
//   ): QueryKey => ["ARTICLE_SEARCH", args[0].params],
//   popular: (
//     ...args: Parameters<typeof articleRequest.article_list>
//   ): QueryKey => ["POPULAR_ARTICLE_LIST", { ...args[0].params, popular: true }],
//   preview: (
//     ...args: Parameters<typeof articleRequest.article_list>
//   ): QueryKey => [
//     "ARTICLE_LIST_PREVIEW",
//     { categoryId: args[0].params.categoryId },
//   ],
// };
