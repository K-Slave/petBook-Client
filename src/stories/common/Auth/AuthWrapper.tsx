import useLoginCheck from "@lib/hooks/login/useLoginCheck";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";

// 자신만 접근할수 있는 곳에 감싸줌
// 어떠한 페이지 나 UI 접근시 사용

interface Props {
  pathTo?: string;
  userId?: string | number;
}

const AuthWrapper = ({
  children,
  pathTo,
  userId,
}: PropsWithChildren<Props>) => {
  const { userData } = useLoginCheck(pathTo);

  if (userId && userData && userData.id.toString() === userId.toString()) {
    return <>{children}</>;
  }

  if (userData) {
    return <>{children}</>;
  }

  return <></>;
};

AuthWrapper.defaultProps = {
  toLogin: false,
};

interface AuthRedirectWrapperProps {
  pathTo: string;
}

export const AuthRedirectWrapper = ({
  children,
  pathTo,
}: PropsWithChildren<AuthRedirectWrapperProps>) => {
  const { userData } = useLoginCheck(pathTo);

  if (userData) {
    return <></>;
  }

  return <>{children}</>;
};

export const AuthSelfHiddenMask = React.memo(
  ({ children, pathTo }: PropsWithChildren<Props>) => {
    const router = useRouter();
    const idPath = router.asPath.replace("/mypage/", "");

    const { userData } = useLoginCheck(pathTo);

    if (userData && userData.id.toString() === idPath) {
      return <></>;
    }

    return <>{children}</>;
  }
);

AuthSelfHiddenMask.displayName = "AuthSelfHiddenMask";

export default React.memo(AuthWrapper);
