import loadingState from "@atoms/common/loadingState";
import { cookieRequest } from "@lib/API/petBookAPI";
import { cookieKeyName } from "@lib/globalConst";
import useUserInfo from "@lib/hooks/common/useUserInfo";
import navigator from "@lib/modules/navigator";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect } from "react";
import { useSetRecoilState } from "recoil";

interface Props {
  toLogin?: boolean;
}

const AuthSelfHiddenMask = React.memo(
  ({ children, toLogin }: PropsWithChildren<Props>) => {
    const { userData } = useUserInfo();
    const router = useRouter();
    const idPath = router.asPath.replace("/mypage/", "");
    const setLoading = useSetRecoilState(loadingState);
    console.log(userData, idPath);
    useEffect(() => {
      if (!userData) {
        // 진짜 로그인 안됐는지 재검사

        setLoading(true);

        cookieRequest
          .getCookie({
            params: {
              key: cookieKeyName.userToken,
            },
          })
          .then((res) => {
            if (!res.response.data) {
              // token 이 있으면 react-query 에 채워주기
              // setUserInfo
              if (toLogin) {
                // toLogin 이면 로그인 페이지로 이동시키기
                navigator({ url: "/login" });
              } else {
                // 아니라면 페이지 강제 리로드
                // window.location.reload();
              }
            }
            setLoading(false);
          })
          .catch((res) => {
            if (toLogin) {
              navigator({ url: "/login" });
            } else {
              // window.location.reload();
            }

            setLoading(false);
          });
      }
    }, [userData]);

    if (userData && userData.id.toString() === idPath) {
      return <></>;
    }

    return <>{children}</>;
  }
);

AuthSelfHiddenMask.displayName = "AuthSelfHiddenMask";

export default AuthSelfHiddenMask;
