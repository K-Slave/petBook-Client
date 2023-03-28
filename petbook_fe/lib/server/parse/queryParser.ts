import type { QueryClient } from "@tanstack/react-query";
import type { UserLocationData } from "@lib/types/CacheData";
import type { GetServerSidePropsContext, NextPageContext } from "next";
import cookies from "next-cookies";
import hospitalOptions from "@lib/commonValue/hospitalOptions";
import keyName from "@lib/commonValue/keyName";
import type { Resource } from "@lib/queries";
import { categoryRequest } from "@lib/API/petBookAPI";

export default async function queryParser(
  ctx: NextPageContext | GetServerSidePropsContext,
  resource: Resource,
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
      case "HOSPITAL_REVIEW_LIST": {
        if (!queryParams.id) break;
        const params = {
          hospitalId: Number(queryParams.id),
          page: 0,
          size: 20,
        };
        await client.fetchQuery(resource.createKey({ params }), () =>
          resource.fetcher({ params })
        );
        break;
      }
      case "ARTICLE_LIST": {
        if (queryParams.query) break;
        const categoryId = queryParams.category
          ? (queryParams.category as string).split("_")[1]
          : "";
        const page = Number(queryParams.page);
        const params = {
          categoryId,
          page: Number.isNaN(page) ? 0 : page - 1,
          size: 20,
          popular: false,
        };
        await client.fetchQuery(
          resource.createKey({
            params,
          }),
          () => resource.fetcher({ params })
        );
        break;
      }
      case "ARTICLE_LIST_PREVIEW": {
        const { data } = await categoryRequest.category_list();
        data.push({ id: 0, name: "전체" });
        for (let i = 0; i < data.length; i++) {
          const { id } = data[i];
          const params = {
            categoryId: id === 0 ? "" : id.toString(),
            page: 0,
            size: 5,
            popular: false,
          };
          await client.prefetchQuery(
            resource.createKey({
              params,
            }),
            () =>
              resource.fetcher({
                params,
              })
          );
        }
        break;
      }
      case "POPULAR_ARTICLE_LIST": {
        const params = {
          categoryId: "",
          page: 0,
          size: 5,
          popular: true,
        };
        await client.fetchQuery(
          resource.createKey({
            params,
          }),
          () => resource.fetcher({ params })
        );
        break;
      }
      case "ARTICLE_SEARCH": {
        if (!queryParams.query) break;
        const categoryId = queryParams.category
          ? (queryParams.category as string).split("_")[1]
          : "";
        const page = Number(queryParams.page);
        const params = {
          categoryId: !categoryId ? null : Number(categoryId),
          page: Number.isNaN(page) ? 0 : page - 1,
          size: 20,
          searchText: queryParams.query as string,
        };
        await client.fetchQuery(
          resource.createKey({
            params,
          }),
          () => resource.fetcher({ params })
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
      case "CATEGORY_LIST": {
        if (typeof window === "undefined") {
          await client.fetchQuery(resource.createKey(), () =>
            resource.fetcher()
          );
        }
        break;
      }
    }
  }
}
