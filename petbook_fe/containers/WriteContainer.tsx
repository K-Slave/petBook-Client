import WriteCategory from "@components/write/WriteCategory";
import useResource from "@lib/hooks/useResource";
import { ARTICLE_LIST, CATEGORY_LIST } from "@pages/community/write";
import { useRouter } from "next/router";
import React from "react";

const WriteContainer = () => {
  const router = useRouter();
  const { page } = router.query;
  const pageStr = page ? (page as string) : "1";

  const category = useResource({
    ...CATEGORY_LIST,
    key: `CATEGORY_LIST_${pageStr}`,
  });

  // 테스트용 예제코드
  const article = useResource({
    ...ARTICLE_LIST,
    key: `ARTICLE_LIST_${pageStr}`,
    params: {
      categoryId: 1,
      page: page ? Number(page as string) - 1 : 0,
      size: 2,
    },
  });

  if (category.status === "success" && article.status === "success") {
    return (
      <WriteCategory
        categoryList={category.data.data}
        articleList={article.data.data}
      />
    );
  }

  return <></>;
};

export default React.memo(WriteContainer);
