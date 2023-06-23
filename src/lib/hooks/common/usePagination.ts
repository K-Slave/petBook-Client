import { useRouter } from "next/router";
import { removeQuery, replaceQuery } from "@lib/modules/queryString";
import navigator from "@lib/modules/navigator";
import { useState, useEffect } from "react";

export const usePage = (totalPages?: number) => {
  const router = useRouter();
  const pageParam = Number(router.query?.page);
  let currentPage = Number.isNaN(pageParam) ? 1 : pageParam;
  if (currentPage < 1) {
    currentPage = 1;
  } else if (totalPages && currentPage > totalPages) {
    currentPage = totalPages;
  }
  return currentPage;
};

export default function usePagination({
  totalPages,
  buttonCntPerLine,
}: {
  totalPages: number;
  buttonCntPerLine: number;
}) {
  const [startPageNum, setStartPageNum] = useState(1);
  const router = useRouter();
  const currentPage = usePage(totalPages);
  const changeCurrentPage = (page: number) => {
    const url =
      page === 1
        ? removeQuery({
            asPath: router.asPath,
            key: "page",
          })
        : replaceQuery({
            asPath: router.asPath,
            key: "page",
            query: String(page),
          });
    navigator({
      url,
      options: {
        shallow: true,
        scroll: true,
      },
    });
  };

  // currentPage 변화에 따른 button offset 판단
  useEffect(() => {
    if (currentPage >= startPageNum + buttonCntPerLine) {
      setStartPageNum((oldOffset) => oldOffset + buttonCntPerLine);
    } else if (currentPage < startPageNum) {
      setStartPageNum((oldOffset) => oldOffset - buttonCntPerLine);
    }
  }, [currentPage]);

  return {
    currentPage,
    changeCurrentPage,
    startPageNum,
  };
}
