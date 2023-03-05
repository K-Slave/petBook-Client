import rectBoundsState from "@atoms/pageAtoms/hospitalmap/rectBounds";
import { convStringCoordinates } from "@lib/utils/kakaoMaps/getRectBounds";
import localConsole from "@lib/utils/localConsole";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import useResource from "../common/useResource";

const usePoiData = () => {
  const currentRectBounds = useRecoilValue(rectBoundsState);
  const router = useRouter();
  const pageParam = router.query?.page ? Number(router.query.page) : 1;
  const id = router.query?.id ? Number(router.query.id) : undefined;
  const currentPage = Number.isNaN(pageParam) ? 1 : pageParam;
  const page = currentPage - 1;
  const boundary = convStringCoordinates(currentRectBounds);

  const { data, status } = useResource({
    key: [HOSPITAL_LIST.key[0], { page, boundary }],
    fetcher: () =>
      HOSPITAL_LIST.fetcher({
        params: {
          id,
          page,
          size: 50,
          boundary: id ? undefined : boundary,
        },
      }),
  });

  // localConsole?.log(data, "data");

  return { router, data, status };
};

export default usePoiData;
