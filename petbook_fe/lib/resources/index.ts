import hospitalOptions from "@lib/commonValue/hospitalOptions";
import keyName from "@lib/commonValue/keyName";
import cookies from "next-cookies";
import type { Key } from "@lib/hooks/common/useResource";
import type { UserLocationData } from "@lib/types/CacheData";
import type { QueryClient } from "@tanstack/react-query";
import type { NextPage, NextPageContext } from "next";
import { HOSPITAL_LIST, HOSPITAL_DETAIL } from "./hospital";

// 함수의 파라미터 타입을 제공하는 제네릭 타입
export type Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer R
) => any
  ? R
  : never;

export function getCreateQueryFn<T, P extends object>({
  createKey,
  fetcher,
}: {
  createKey: (p: P) => Key;
  fetcher: (payload: P) => Promise<T>;
}) {
  return (payload: P) => {
    return {
      key: createKey(payload),
      fetcher: () => fetcher(payload),
    };
  };
}

export type Resource = typeof HOSPITAL_LIST | typeof HOSPITAL_DETAIL;
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

      const query = resource.createQuery({
        params: {
          page: queryParams.page
            ? Number(queryParams.page) - 1
            : hospitalOptions.page,
          size: hospitalOptions.size,
          boundary:
            (cachedData && cachedData.boundary) || hospitalOptions.boundary,
        },
      });
      await client.fetchQuery(query.key, query.fetcher);
      break;
    }
    case "HOSPITAL_DETAIL": {
      if (!queryParams.id) break;
      const query = resource.createQuery({
        pathParam: String(queryParams.id),
      });
      await client.fetchQuery(query.key, query.fetcher);
      break;
    }
  }
}
