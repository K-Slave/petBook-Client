import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

export const useCurrentPage = (numPages: number) => {
  const router = useRouter();
  const currentPage = Number(router.query?.page);
  const changeCurrentPage = useCallback((page: number) => {
    const url = `/community?page=${page}`;
    router.push(url, undefined, {
      scroll: false,
    });
  }, []);

  useEffect(() => {
    const page = Number(router.query?.page);
    if (isNaN(page) || page < 1) {
      changeCurrentPage(1);
    } else if (page > numPages) {
      changeCurrentPage(numPages);
    }
  }, [router.query?.page]);

  return {
    currentPage,
    changeCurrentPage,
  };
};
