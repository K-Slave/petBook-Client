import rectBoundsState from "@atoms/pageAtoms/hospitalmap/rectBounds";
import { cookieRequest } from "@lib/API/petBookAPI";
import { convRectBoundsToBoundary } from "@lib/utils/kakaoMaps/getRectBounds";
import localConsole from "@lib/utils/localConsole";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import useDidMountEffect from "../common/useDidMountEffect";
import useResource from "../common/useResource";

// const defaultPage = 0;
const defaultSize = 50;
// const defaultBoundary =
//   "(28127.00963325656245,37.48459126977702,127.05668520469185,37.48459126977702,127.00963325656245,37.50620222560144,127.05668520469185,37.50620222560144)";

const usePoiData = () => {
  // const cachedRectBounds = useRecoilValue(cachedRectBoundsState);
  const rectBounds = useRecoilValue(rectBoundsState);
  const router = useRouter();
  const pageParam = router.query?.page ? Number(router.query.page) : 1;
  // const id = router.query?.id ? Number(router.query.id) : undefined;
  const currentPage = Number.isNaN(pageParam) ? 1 : pageParam;
  const page = currentPage - 1;
  const boundary = convRectBoundsToBoundary(rectBounds);

  const fetchParams = {
    page,
    size: defaultSize,
    boundary,
  };

  const { data, status } = useResource({
    key: [HOSPITAL_LIST.key[0], fetchParams],
    fetcher: () =>
      HOSPITAL_LIST.fetcher({
        params: fetchParams,
      }),
  });

  useDidMountEffect(() => {
    const patchCookie = async () => {
      await cookieRequest.patchCookie({
        body: {
          key: "USER_LOCATION_DATA",
          value: {
            boundary,
          },
        },
      });
    };

    patchCookie();
  }, [rectBounds]);

  return { router, data, status };
};

export default usePoiData;
