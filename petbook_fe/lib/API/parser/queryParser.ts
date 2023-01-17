import { ParsedUrlQuery } from "querystring";
import { QueryClient } from "@tanstack/react-query";
import type { Key } from "@lib/hooks/common/useResource";

export default async function queryParser(
  resource: {
    key: Key;
    fetcher: (params?: any, config?: any) => void;
  },
  queryParams: ParsedUrlQuery, // [articleId]와 같은 쿼리 값을 얻기 위해 파라미터 추가
  client: QueryClient
) {
  switch (resource.key[0]) {
    case "COMMENT_LIST": {
      await client.prefetchInfiniteQuery(resource.key, () =>
        resource.fetcher()
      );
      break;
    }

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
