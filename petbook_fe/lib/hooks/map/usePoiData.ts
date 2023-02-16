import { HOSPITAL_LIST } from "@pages/hospitalmap";
import { useRouter } from "next/router";
import useResource from "../common/useResource";

const usePoiData = () => {
  const router = useRouter();
  const pageParam = Number(router.query?.page);
  const currentPage = Number.isNaN(pageParam) ? 1 : pageParam;
  const page = currentPage - 1;

  const { data, status } = useResource({
    key: [HOSPITAL_LIST.key[0], { page }],
    fetcher: () =>
      HOSPITAL_LIST.fetcher({
        params: {
          page,
          size: 50,
        },
      }),
  });

  // return [router, data, status] as [typeof router, typeof data, typeof status];

  return { router, data, status };
};

export default usePoiData;
