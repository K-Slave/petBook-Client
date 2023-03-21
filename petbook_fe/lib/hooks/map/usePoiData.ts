import geoLocationState from "@atoms/pageAtoms/hospitalmap/geoLocation";
import rectBoundsState from "@atoms/pageAtoms/hospitalmap/rectBounds";
import { cookieRequest } from "@lib/API/petBookAPI";
import hospitalOptions from "@lib/commonValue/hospitalOptions";
import keyName from "@lib/commonValue/keyName";
import { convRectBoundsToBoundary } from "@lib/utils/kakaoMaps/getRectBounds";
import localConsole from "@lib/utils/localConsole";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import useResource from "../common/useResource";

const usePoiData = () => {
  // const cachedRectBounds = useRecoilValue(cachedRectBoundsState);
  // const geoLocation = useRecoilValue(geoLocationState);
  const rectBounds = useRecoilValue(rectBoundsState);
  const router = useRouter();
  const pageParam = router.query?.page ? Number(router.query.page) : 1;
  const currentPage = Number.isNaN(pageParam) ? 1 : pageParam;
  const page = currentPage - 1;
  const boundary = convRectBoundsToBoundary(rectBounds);

  localConsole?.log(rectBounds, "rectBounds");

  const fetchParams = {
    page,
    size: hospitalOptions.size,
    boundary,
  };

  localConsole?.log(fetchParams, "fetchParams");

  const { data, status } = useResource({
    key: [HOSPITAL_LIST.key[0], fetchParams],
    fetcher: () =>
      HOSPITAL_LIST.fetcher({
        params: fetchParams,
      }),
  });

  // const patchCookie = async () => {
  //   await cookieRequest.patchCookie({
  //     body: {
  //       key: keyName.location,
  //       value: {
  //         boundary,
  //       },
  //     },
  //   });
  // };

  // useDidMountEffect(() => {
  //   patchCookie();
  // }, [geoLocation]);

  return { router, data, status };
};

export default usePoiData;
