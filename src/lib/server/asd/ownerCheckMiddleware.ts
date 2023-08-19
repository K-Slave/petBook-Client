import { GetServerSidePropsContext } from "next";

interface OwnerCheckMiddlewareProps {
  context: GetServerSidePropsContext;
  path: string | undefined;
  ownerToken: string | null;
}

const ownerCheckMiddleware = ({
  context,
  path,
  ownerToken,
}: OwnerCheckMiddlewareProps) => {
  const resultOwnerToken = ownerToken;

  // if (
  //   resultOwnerToken === process.env.NEXT_PUBLIC_OWNER ||
  //   process.env.NODE_ENV === "development"
  // ) {
  //   ownerAuth(context);
  //   resultOwnerToken = process.env.NEXT_PUBLIC_OWNER;
  // }

  // 방문자 인증 처리
  // if (path !== "/" && !resultOwnerToken) {
  //   ownerAuthRedirect(context);
  // }

  return { resultOwnerToken };
};

export default ownerCheckMiddleware;
