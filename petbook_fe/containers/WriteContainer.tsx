import WriteCategory from "@components/write/WriteCategory";
import useResource from "@lib/hooks/useResource";
import { ARTICLE_LIST, CATEGORY_LIST } from "@pages/community/write";
import { useRouter } from "next/router";
import React from "react";

const WriteContainer = () => {
  const router = useRouter();
  const { currentPage } = router.query;
  const pageStr = currentPage ? (currentPage as string) : "1";

  const category = useResource({
    ...CATEGORY_LIST,
    key: `CATEGORY_LIST_${pageStr}`,
  });

  // 테스트용 예제코드
  const article = useResource({
    ...ARTICLE_LIST,
    key: `ARTICLE_LIST_${pageStr}`,
    params: {
      categoryId: currentPage ? Number(currentPage as string) : 1,
      page: currentPage ? Number(currentPage as string) : 0,
      size: 10,
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
