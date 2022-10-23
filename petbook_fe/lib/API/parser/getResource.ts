import { QueryClient } from "react-query";

export default async function getResource(
  resource: {
    key: string;
    fetcher: (params?: any, config?: any) => void;
    params?: object | undefined;
    config?: object | undefined;
  },
  searchParams: URLSearchParams,
  client: QueryClient
) {
  switch (resource.key) {
    case "ARTICLE_LIST": {
      const page = searchParams.get("/community/write?page") || "1";

      await client.fetchQuery(`${resource.key}_${page}`, () =>
        resource.fetcher({
          categoryId: Number(page),
          page: Number(page) - 1,
          size: 10,
        })
      );

      break;
    }

    case "CATEGORY_LIST": {
      const page = searchParams.get("/community/write?page") || "1";

      await client.fetchQuery(`${resource.key}_${page}`, () =>
        resource.fetcher()
      );

      break;
    }

    default:
      await client.fetchQuery(resource.key, resource.fetcher);
  }
}
