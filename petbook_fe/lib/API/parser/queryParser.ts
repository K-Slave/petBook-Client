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

    // TODO: 로케이션 쿠키에 있는 값을 꺼내서 boundary 에 붙여야함
    case "HOSPITAL_LIST": {
      const id = queryParams.id ? Number(queryParams.id) : null;
      const page = queryParams.page ? Number(queryParams.page) - 1 : 0;
      const key = id ? [...resource.key, { id }] : [...resource.key, { page }];
      await client.fetchQuery(key, () =>
        resource.fetcher({
          params: {
            id,
            page: id ? 0 : page,
            size: id ? 1 : 50,
          },
        })
      );
      break;
    }

    default: {
      await client.fetchQuery(resource.key, resource.fetcher);
    }
  }
}
