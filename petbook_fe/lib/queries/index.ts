import type { Key } from "@lib/hooks/common/useResource";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import {
  HOSPITAL_LIST,
  HOSPITAL_DETAIL,
  HOSPITAL_REVIEW_LIST,
} from "./hospital";
import {
  ARTICLE_DETAIL,
  ARTICLE_LIST,
  ARTICLE_LIST_PREVIEW,
  ARTICLE_SEARCH,
  POPULAR_ARTICLE_LIST,
} from "./article";
import { COMMENT_LIST } from "./comment";
import { CATEGORY_LIST } from "./category";

// 함수의 파라미터 타입을 제공하는 제네릭 타입
export type Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer R
) => any
  ? R
  : never;

export function useResourceNew<T>(resource: {
  key: Key;
  fetcher: () => Promise<T>;
}) {
  return useQuery(resource.key, resource.fetcher);
}

export type Resource =
  | typeof HOSPITAL_LIST
  | typeof HOSPITAL_DETAIL
  | typeof HOSPITAL_REVIEW_LIST
  | typeof ARTICLE_LIST
  | typeof ARTICLE_SEARCH
  | typeof POPULAR_ARTICLE_LIST
  | typeof ARTICLE_LIST_PREVIEW
  | typeof ARTICLE_DETAIL
  | typeof COMMENT_LIST
  | typeof CATEGORY_LIST;
export type NextPageWithResources = NextPage & {
  requiredResources?: Resource[];
};
