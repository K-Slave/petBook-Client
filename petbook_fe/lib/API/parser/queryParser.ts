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

    case "HOSPITAL_LIST": {
      const id = queryParams.id ? Number(queryParams.id) : null;
      const page = queryParams.page ? Number(queryParams.page) - 1 : 0;
      if (id) {
        await client.fetchQuery([...resource.key, { id }], () =>
          resource.fetcher({
            params: {
              id,
              page: 0,
              size: 1,
            },
          })
        );
      } else {
        await client.fetchQuery([...resource.key, { page }], () =>
          resource.fetcher({
            params: {
              page,
              size: 50,
            },
          })
        );
      }
      break;
    }

    default: {
      await client.fetchQuery(resource.key, resource.fetcher);
    }
  }
}
