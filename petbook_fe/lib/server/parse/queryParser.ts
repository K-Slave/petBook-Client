import type { QueryClient } from "@tanstack/react-query";
import type { Key } from "@lib/hooks/common/useResource";
import type { UserLocationData } from "@lib/types/CacheData";
import type { GetServerSidePropsContext, NextPageContext } from "next";
import cookies from "next-cookies";
import hospitalOptions from "@lib/commonValue/hospitalOptions";
import keyName from "@lib/commonValue/keyName";
import type { Resource } from "@lib/resources";

export default async function queryParser(
  ctx: NextPageContext | GetServerSidePropsContext,
  resource:
    | {
        key: Key;
        fetcher: (params?: any, config?: any) => void;
      }
    | Resource,
  client: QueryClient
) {
  const { query: queryParams } = ctx;
  if ("name" in resource) {
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
  } else {
    switch (resource.key[0]) {
      case "CATEGORY_LIST": {
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
