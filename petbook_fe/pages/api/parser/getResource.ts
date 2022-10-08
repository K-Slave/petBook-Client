import { QueryClient } from "react-query";

export default async function getResource(
  resource: {
    key: string;
    fetcher: Function;
    params?: object | undefined;
    config?: object | undefined;
  },
  searchParams: URLSearchParams,
  client: QueryClient
) {
  const currentPage = searchParams.get("/community/write?currentPage")
    ? searchParams.get("/community/write?currentPage")
    : 1;

  const params = {
    currentPage: currentPage,
  };

  const paramFetcher = () => resource.fetcher(params);

  await client.fetchQuery(resource.key, paramFetcher);
}
