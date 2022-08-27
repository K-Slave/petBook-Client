import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelect } from "../useSelect";

export const useCurrentPage = (numPages: number) => {
  const router = useRouter();
  const [currentPage, selectPage] = useSelect(1);
  const changeCurrentPage = (page: number) => {
    const url = `/community?page=${page}`;
    router
      .push(url, url, {
        scroll: false,
      })
      .then((data) => {
        if (data) {
          selectPage(page);
        }
      });
  };

  useEffect(() => {
    const page = Number(router.query?.page);
    if (isNaN(page) || page < 1) {
      changeCurrentPage(1);
    } else if (page > numPages) {
      changeCurrentPage(numPages);
    } else {
      selectPage(page);
    }
  }, [router.query?.page]);

  return {
    currentPage,
    changeCurrentPage,
  };
};
