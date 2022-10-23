import { ParsedUrlQuery } from "querystring";
import { QueryClient } from "react-query";

export default async function getResource(
  resource: {
    key: string;
    fetcher: (params?: any, config?: any) => void;
    params?: object | undefined;
    config?: object | undefined;
  },
  query: ParsedUrlQuery, // [articleId]와 같은 쿼리 값을 얻기 위해 파라미터 추가
  searchParams: URLSearchParams,
  client: QueryClient
) {
  // getInitialProps가 서버사이드 혹은 클라이언트 사이드에서 작동하는지 여부를 판단하여 initUrl 변수에 값 할당
  let initUrl = "";
  if (typeof window === "undefined") {
    // server-side
    initUrl = process.env.NEXT_PUBLIC_SPR_URL as string;
  }

  switch (resource.key) {
    case "ARTICLE_LIST": {
      const pageParam = searchParams.get("page");
      const page = pageParam || "1";
      const categoryId = 0;

      // 실제 useQuery 사용하는 곳과 쿼리키가 같아야 해서 쿼리키 수정
      await client.fetchQuery(`${resource.key}_${page}_${categoryId}`, () =>
        resource.fetcher({
          initUrl,
          categoryId: "",
          page: Number(page) - 1,
          size: 10,
        })
      );
      break;
    }

    // 게시물 단건조회 api 호출 로직 추가
    case "ARTICLE_ITEM": {
      const path = query.articleId as string;
      await client.fetchQuery(`${resource.key}_${path}`, () =>
        resource.fetcher(path)
      );
      break;
    }

    case "CATEGORY_LIST": {
      await client.fetchQuery(`${resource.key}`, () =>
        resource.fetcher({
          initUrl,
        })
      );
      break;
    }

    default:
      await client.fetchQuery(resource.key, resource.fetcher);
  }
}
