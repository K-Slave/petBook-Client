import { ParsedUrlQuery } from "querystring";
import { QueryClient } from "react-query";

export default async function queryParser(
  resource: {
    key: string;
    fetcher: (params?: any, config?: any) => void;
  },
  queryParams: ParsedUrlQuery, // [articleId]와 같은 쿼리 값을 얻기 위해 파라미터 추가
  client: QueryClient
) {
  switch (resource.key) {
    // 게시물 단건조회 api 호출 로직 추가
    case "ARTICLE_ITEM": {
      const path = queryParams.articleId as string;
      await client.fetchQuery(`${resource.key}_${path}`, () =>
        resource.fetcher(`/${path}`)
      );
      break;
    }

    case "COMMENT_LIST": {
      const articleId = queryParams.articleId as string;
      await client.fetchQuery(`${resource.key}_${articleId}`, () =>
        resource.fetcher({ articleId })
      );
      break;
    }

    case "CATEGORY_LIST": {
      await client.fetchQuery(`${resource.key}`, () => resource.fetcher());
      break;
    }

    default:
      await client.fetchQuery(resource.key, resource.fetcher);
  }
}
