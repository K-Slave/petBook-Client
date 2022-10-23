import { ParsedUrlQuery } from "querystring";
import { QueryClient } from "react-query";

export default async function getResource(
  resource: {
    key: string;
    fetcher: (params?: any, config?: any) => void;
    params?: object | undefined;
    config?: object | undefined;
  },
  query: ParsedUrlQuery,
  searchParams: URLSearchParams,
  client: QueryClient
) {
  let initUrl = "";
  if (typeof window === "undefined") {
    initUrl = process.env.NEXT_PUBLIC_SPR_URL as string;
  }
  switch (resource.key) {
    case "ARTICLE_LIST": {
      const pageParam = searchParams.get("page");
      const page = pageParam || "1";
      const categoryId = 0;

      await client.fetchQuery(`${resource.key}_${page}_${categoryId}`, () =>
        resource.fetcher({
          initUrl,
          categoryId: "",
          page: Number(page) - 1,
          size: 10,
        })
      );
      break;
    }

    case "ARTICLE_ITEM": {
      const path = query.articleId as string;
      await client.fetchQuery(`${resource.key}_${path}`, () =>
        resource.fetcher(path)
      );
      break;
    }

    case "CATEGORY_LIST": {
      const page = searchParams.get("/community/write?page") || "1";

      await client.fetchQuery(`${resource.key}_${page}`, () =>
        resource.fetcher({
          initUrl,
        })
      );
      break;
    }

    default:
      await client.fetchQuery(resource.key, resource.fetcher);
  }
}
