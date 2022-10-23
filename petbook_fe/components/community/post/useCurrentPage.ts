import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

export default function useCurrentPage(numPages: number) {
  const router = useRouter();
  const currentPage = Number(router.query?.page);
  const changeCurrentPage = useCallback((page: number) => {
    router
      .push(`/community?page=${page}`, undefined, {
        scroll: false,
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const page = Number(router.query?.page);
    if (Number.isNaN(page) || page < 1) {
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
