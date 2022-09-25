import { useRouter } from "next/router";

export const useCurrentPage = () => {
  const router = useRouter();
  const currentPage = Number(router.query?.page);
  const changeCurrentPage = (page: number) => {
    const url = `/community?page=${page}`;
    router.push(url, url, {
      scroll: false,
      shallow: true,
    });
  };

  return {
    currentPage,
    changeCurrentPage,
  };
};
