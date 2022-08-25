import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useSelect } from "../useSelect";

export const useCurrentPage = (): [number, (page: number) => void] => {
  const router = useRouter();
  const [page, selectPage] = useSelect(1);
  const changePage = (page: number) => {
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
      changePage(1);
    } else {
      selectPage(page);
    }
  }, [router.query?.page]);
  return [page, changePage];
};
