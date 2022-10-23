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
      const currentPage = searchParams.get("/community/write?currentPage")
        ? searchParams.get("/community/write?currentPage")
        : "1";

      await client.fetchQuery(resource.key, () =>
        resource.fetcher({
          categoryId: currentPage,
          page: 0,
          size: 10,
        })
      );

      break;
    }

    default:
      await client.fetchQuery(resource.key, resource.fetcher);
  }
}
