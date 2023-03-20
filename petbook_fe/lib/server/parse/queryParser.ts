import { ParsedUrlQuery } from "querystring";
import { QueryClient } from "@tanstack/react-query";
import { type Key } from "@lib/hooks/common/useResource";
import { UserLocationData } from "@lib/types/CacheData";
import { NextPageContext } from "next";
import cookies from "next-cookies";
import hospitalOptions from "@lib/commonValue/hospitalOptions";
import keyName from "@lib/commonValue/keyName";
import { type Resource } from "@lib/commonValue/queries";

export default async function queryParser(
  ctx: NextPageContext,
  resource:
    | {
        key: Key;
        fetcher: (params?: any, config?: any) => void;
      }
    | Resource,
  queryParams: ParsedUrlQuery,
  client: QueryClient
) {
  if ("name" in resource) {
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
  } else {
    switch (resource.key[0]) {
      case "COMMENT_LIST": {
        if ("createResource" in resource) break;
        await client.prefetchInfiniteQuery(resource.key, () =>
          resource.fetcher()
        );
        break;
      }

      case "CATEGORY_LIST": {
        if ("createResource" in resource) break;
        if (typeof window === "undefined") {
          await client.fetchQuery([...resource.key], () => resource.fetcher());
        }
        break;
      }

      default: {
        await client.fetchQuery(resource.key, resource.fetcher);
      }
    }
  }
}
