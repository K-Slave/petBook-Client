import type { AppContext, AppProps } from "next/app";
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import "../styles/Globals.scss";
import "../styles/Texts.scss";
import "../styles/find/Texts.scss";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import redirect from "./api/redirect";
import HtmlHeader from "../components/common/HtmlHeader";
import CommonHeader from "../components/common/CommonHeader";

// import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
// import { redirect, sendStatusCode } from "next/dist/server/api-utils";

export default function NextApp(appInitProps: AppProps) {
  const { Component, pageProps, router } = appInitProps;

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <HtmlHeader />
          <CommonHeader pathname={router.pathname} />
          <Component />
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

NextApp.getInitialProps = async (context: AppContext) => {
  const { Component, router, ctx } = context;

  if (
    router.asPath.includes("access_token") ||
    router.asPath.includes("refresh_token")
  ) {
    redirect(context);
  }

  const page: any = Component;

  const { requiredResources } = page;

  const searchParams = new URLSearchParams(router.asPath);

  if (requiredResources) {
    await Promise.all(
      requiredResources.map(async (resource: any) => {
        const params = {
          ...resource.params,
          currentPage: searchParams.get("/community/write?page")
            ? searchParams.get("/community/write?page")
            : 1,
        };

        const paramFetcher = () => resource.fetcher(params);

        await queryClient.fetchQuery(resource.key, paramFetcher);
      })
    );
  }

  return {
    pageProps: {
      router: router,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
