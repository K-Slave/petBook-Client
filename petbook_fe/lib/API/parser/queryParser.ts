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
    case "ARTICLE_LIST": {
      const pageParam = queryParams.page;
      const page = pageParam || "1";
      const categoryId = 0;

      // 실제 useQuery 사용하는 곳과 쿼리키가 같아야 해서 쿼리키 수정
      await client.fetchQuery(
        `${resource.key}_${page as string}_${categoryId}`,
        () =>
          resource.fetcher({
            categoryId: "",
            page: Number(page) - 1,
            size: 10,
          })
      );
      break;
    }

    // 게시물 단건조회 api 호출 로직 추가
    case "ARTICLE_ITEM": {
      const path = queryParams.articleId as string;
      await client.fetchQuery(`${resource.key}_${path}`, () =>
        resource.fetcher(path)
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
