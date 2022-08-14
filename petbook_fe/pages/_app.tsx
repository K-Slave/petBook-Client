import "../styles/Globals.scss";
import "../styles/Texts.scss";
import "../styles/find/Texts.scss";

import type { AppContext, AppProps } from "next/app";
import { dehydrate, QueryClient, QueryClientProvider } from "react-query";
import redirect from "./api/redirect";
// import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
// import { redirect, sendStatusCode } from "next/dist/server/api-utils";

const queryClient = new QueryClient();

function NextApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default NextApp;

NextApp.getInitialProps = async (context: AppContext) => {
  const { Component, router, ctx } = context;

  const page: any = Component;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  if (
    router.asPath.includes("access_token") ||
    router.asPath.includes("refresh_token")
  ) {
    redirect(context);
  }

  const { requiredResources } = page;

  if (requiredResources) {
    await Promise.all(
      requiredResources.map(async (resource: any) => {
        await queryClient.fetchQuery(resource.key, resource.fetcher);
      })
    );
  }

  return {
    pageProps: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
