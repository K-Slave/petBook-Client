import hospitalOptions from "@lib/commonValue/hospitalOptions";
import keyName from "@lib/commonValue/keyName";
import cookies from "next-cookies";
import type { Key } from "@lib/hooks/common/useResource";
import type { UserLocationData } from "@lib/types/CacheData";
import { type QueryClient, useQuery } from "@tanstack/react-query";
import type { NextPage, NextPageContext } from "next";
import { HOSPITAL_LIST, HOSPITAL_DETAIL } from "./hospital";
import { ARTICLE_DETAIL } from "./article";
import { COMMENT_LIST } from "./comment";

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
  | typeof ARTICLE_DETAIL
  | typeof COMMENT_LIST;
export type NextPageWithResources = NextPage & {
  requiredResources?: Resource[];
};

export default async function queryParser(
  ctx: NextPageContext,
  resource: Resource,
  client: QueryClient
) {
  const { query: queryParams } = ctx;
  switch (resource.name) {
    case "HOSPITAL_LIST": {
      if (queryParams.id) break;
      const cachedData = cookies(ctx)[keyName.location] as
        | UserLocationData
        | undefined;

      const payload = {
        params: {
          page: queryParams.page
            ? Number(queryParams.page) - 1
            : hospitalOptions.page,
          size: hospitalOptions.size,
          boundary:
            (cachedData && cachedData.boundary) || hospitalOptions.boundary,
        },
      };
      await client.fetchQuery(resource.createKey(payload), () =>
        resource.fetcher(payload)
      );
      break;
    }
    case "HOSPITAL_DETAIL": {
      if (!queryParams.id) break;
      const payload = {
        pathParam: String(queryParams.id),
      };
      await client.fetchQuery(resource.createKey(payload), () =>
        resource.fetcher(payload)
      );
      break;
    }
    case "ARTICLE_DETAIL": {
      if (!queryParams.articleId) break;
      const payload = {
        pathParam: String(queryParams.articleId),
      };
      await client.fetchQuery(resource.createKey(payload), () =>
        resource.fetcher(payload)
      );
      break;
    }
    case "COMMENT_LIST": {
      if (!queryParams.articleId) break;
      await client.fetchInfiniteQuery(
        resource.createKey(Number(queryParams.articleId)),
        () =>
          resource.fetcher({
            params: {
              articleId: Number(queryParams.articleId),
              page: 0,
              size: 20,
            },
          })
      );
      break;
    }
  }
}
