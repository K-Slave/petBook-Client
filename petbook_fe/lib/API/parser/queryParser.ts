import { ParsedUrlQuery } from "querystring";
import { QueryClient } from "@tanstack/react-query";

export default async function queryParser(
  resource: {
    key: any[];
    fetcher: (params?: any, config?: any) => void;
  },
  queryParams: ParsedUrlQuery, // [articleId]와 같은 쿼리 값을 얻기 위해 파라미터 추가
  client: QueryClient
) {
  switch (resource.key[0]) {
    // 게시물 단건조회 api 호출 로직 추가
    case "ARTICLE_ITEM": {
      const path = queryParams.articleId as string;
      await client.fetchQuery([...resource.key, path], () =>
        resource.fetcher(`/${path}`)
      );
      break;
    }

    case "COMMENT_LIST": {
      const articleId = queryParams.articleId as string;
      await client.prefetchInfiniteQuery([...resource.key, articleId], () =>
        resource.fetcher({ articleId, page: 0, size: 20 })
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
