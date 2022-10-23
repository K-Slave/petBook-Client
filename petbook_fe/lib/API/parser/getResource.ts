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
      const pageParam = searchParams.get("page");
      const page = pageParam || "1";
      const categoryId = 0;
      console.log(page);

      await client.fetchQuery(`${resource.key}_${page}_${categoryId}`, () =>
        resource.fetcher({
          categoryId: "",
          page: Number(page) - 1,
          size: 10,
        })
      );

      break;
    }

    /*
    case "CATEGORY_LIST": {
      const currentPage = searchParams.get("/community/write?currentPage")
        ? searchParams.get("/community/write?currentPage")
        : "1";

      await client.fetchQuery(`${resource.key}_${currentPage as string}`, () =>
        resource.fetcher()
      );

      break;
    }
    */

    default:
      await client.fetchQuery(resource.key, resource.fetcher);
  }
}
