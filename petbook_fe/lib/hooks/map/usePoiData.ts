import {
  currentGeoLocationState,
  currentRectBoundsState,
} from "@atoms/pageAtoms/hospitalmap/mapState";
import getRectBounds, {
  convStringCoordinates,
} from "@lib/utils/kakaoMaps/getRectBounds";
import localConsole from "@lib/utils/localConsole";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import useResource from "../common/useResource";

const usePoiData = () => {
  const currentRectBounds = useRecoilValue(currentRectBoundsState);

  const client = useQueryClient();
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
          boundary: convStringCoordinates(currentRectBounds),
        },
      }),
  });

  useEffect(() => {
    client.fetchQuery(
      [
        HOSPITAL_LIST.key[0],
        { page, boundary: convStringCoordinates(currentRectBounds) },
      ],
      () =>
        HOSPITAL_LIST.fetcher({
          params: {
            page,
            size: 50,
            boundary: convStringCoordinates(currentRectBounds),
          },
        })
    );
  }, [currentRectBounds]);

  // return [router, data, status] as [typeof router, typeof data, typeof status];

  return { router, data, status };
};

export default usePoiData;
