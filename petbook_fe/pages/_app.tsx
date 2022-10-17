import type { AppContext, AppProps } from "next/app";
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import HtmlHeader from "../components/common/HtmlHeader";
import CommonHeader from "../components/common/CommonHeader";
import "../styles/Globals.scss";
import "../styles/Texts.scss";
import "../styles/find/Texts.scss";
import getResource from "./API/parser/getResource";
import tokenRedirect from "./API/parser/tokenRedirect";
import { itrMap } from "../lib/utils/iterableFunctions";

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

NextApp.getInitialProps = async (context: AppContext) => {
  const { Component, router, ctx } = context;

  if (
    router.asPath.includes("access_token") ||
    router.asPath.includes("refresh_token")
  ) {
    tokenRedirect(context);
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 3640,
      },
    },
  });

  const PageComponent: typeof Component & {
    requiredResources?: Array<{
      key: string;
      fetcher: Function;
      params?: object;
      config?: object;
    }>;
  } = Component;

  const { requiredResources } = PageComponent;

  const searchParams = new URLSearchParams(router.asPath);

  if (requiredResources) {
    await Promise.all(
      itrMap(
        (resource) => getResource(resource, searchParams, queryClient),
        requiredResources
      )
    );
  }

  return {
    pageProps: {
      router: router,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
