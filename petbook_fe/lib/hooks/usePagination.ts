import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

export const usePage = () => {
  const router = useRouter();
  const pageParam = Number(router.query?.page);
  const currentPage = Number.isNaN(pageParam) ? 1 : pageParam;
  return currentPage;
};

export default function usePagination(numPages: number) {
  const currentPage = usePage();
  const router = useRouter();
  const changeCurrentPage = useCallback((page: number) => {
    router
      .push(`/community?page=${page}`, undefined, {
        shallow: true,
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const page = Number(router.query?.page);
    if (page < 1) {
      changeCurrentPage(1);
    } else if (page > numPages) {
      changeCurrentPage(numPages);
    }
  }, [router.query?.page]);

  return {
    currentPage,
    changeCurrentPage,
  };
}
