import { useEffect } from "react";
import useUserInfo from "../common/useUserInfo";
import navigator from "@lib/modules/navigator";

const useLoginCheck = (pathTo?: string) => {
  const { userData } = useUserInfo();
  // const setLoading = useSetRecoilState(loadingState);

  // useEffect(() => {
  //   if (!userData) {
  //     // 진짜 로그인 안됐는지 재검사

  //     setLoading(true);

  //     cookieRequest
  //       .getCookie({
  //         params: {
  //           key: cookieKeyName.userToken,
  //         },
  //       })
  //       .then((res) => {
  //         if (!res.response.data) {
  //           if (pathTo) {
  //             navigator({ url: pathTo });
  //           } else {
  //             // 아니라면 페이지 강제 리로드
  //             // window.location.reload();
  //           }
  //         }
  //         setLoading(false);
  //       })
  //       .catch((res) => {
  //         setLoading(false);
  //       });
  //   }
  // }, [userData]);

  useEffect(() => {
    if (userData && pathTo) {
      navigator({ url: pathTo });
    }
  }, [userData]);

  return { userData };
};

export default useLoginCheck;
