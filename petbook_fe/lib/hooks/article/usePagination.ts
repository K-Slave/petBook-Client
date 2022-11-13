import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import navigator from "@lib/modules/navigator";

export const usePage = () => {
  const router = useRouter();
  const pageParam = Number(router.query?.page);
  const currentPage = Number.isNaN(pageParam) ? 1 : pageParam;
  return currentPage;
};

export default function usePagination(numPages: number) {
  const currentPage = usePage();
  const changeCurrentPage = useCallback((page: number) => {
    navigator(`/community?page=${page}`, undefined, {
      shallow: true,
    });
  }, []);

  useEffect(() => {
    if (currentPage < 1) {
      changeCurrentPage(1);
    } else if (currentPage > numPages) {
      changeCurrentPage(numPages);
    }
  }, [currentPage]);

  return {
    currentPage,
    changeCurrentPage,
  };
}
