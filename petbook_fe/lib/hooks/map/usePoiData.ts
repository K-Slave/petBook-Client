import geoLocationState from "@atoms/pageAtoms/hospitalmap/geoLocation";
import rectBoundsState from "@atoms/pageAtoms/hospitalmap/rectBounds";
import { cookieRequest } from "@lib/API/petBookAPI";
import hospitalOptions from "@lib/commonValue/hospitalOptions";
import keyName from "@lib/commonValue/keyName";
import { HOSPITAL_LIST } from "@lib/commonValue/queries";
import { convRectBoundsToBoundary } from "@lib/utils/kakaoMaps/getRectBounds";
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

  const { data, status } = useResource(
    HOSPITAL_LIST.createQuery({
      params: {
        page,
        size: hospitalOptions.size,
        boundary,
      },
    })
  );

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
