import { GetServerSidePropsContext } from "next";

const putHttpCookie = ({
  context,
  key,
  value,
  lifeTime,
}: {
  context: GetServerSidePropsContext;
  key: string;
  value: string;
  lifeTime: string;
}) => {
  context.res?.setHeader(
    "Set-Cookie",
    `${key}=${value}; Path=/; SameSite=Strict; Max-Age=${lifeTime}; secure; httpOnly;`
  );
};

export default putHttpCookie;
