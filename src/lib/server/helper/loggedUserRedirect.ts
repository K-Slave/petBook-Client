import { GetServerSidePropsContext } from "next";

const loggedUserRedirect = (context: GetServerSidePropsContext) => {
  context.res?.writeHead(301, {
    Location: `/`,
  });

  return context.res?.end();
};

export default loggedUserRedirect;
