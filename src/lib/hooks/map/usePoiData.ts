import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import rectBoundsState from "@atoms/pageAtoms/hospitalmap/rectBounds";
import hospitalOptions from "@lib/globalConst/hospitalOptions";
import { HOSPITAL_LIST } from "@lib/resources/hospitalResource";
import { convRectBoundsToBoundary } from "@lib/utils/kakaoMaps/getRectBounds";
import { useResource } from "../common/useResource";

const usePoiData = () => {
  // const cachedRectBounds = useRecoilValue(cachedRectBoundsState);
  // const geoLocation = useRecoilValue(geoLocationState);
  const rectBounds = useRecoilValue(rectBoundsState);
  const router = useRouter();
  const pageParam = router.query?.page ? Number(router.query.page) : 1;
  const currentPage = Number.isNaN(pageParam) ? 1 : pageParam;
  const page = currentPage - 1;
  const boundary = convRectBoundsToBoundary(rectBounds);

  const payload = {
    params: {
      page,
      size: hospitalOptions.size,
      boundary,
    },
  };
  const { data } = useResource({
    resource: HOSPITAL_LIST,
    payload,
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
