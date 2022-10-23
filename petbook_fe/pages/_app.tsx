import React, { useState } from "react";
import type { AppContext, AppProps } from "next/app";
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { RecoilRoot } from "recoil";
import HtmlHeader from "../components/common/HtmlHeader";
import CommonHeader from "../components/common/CommonHeader";
import { itrMap } from "../lib/utils/iterableFunctions";
import tokenRedirect from "../lib/API/parser/tokenRedirect";
import getResource from "../lib/API/parser/getResource";

import "../styles/Globals.scss";

const NextApp = (appInitProps: AppProps) => {
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
};

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
      fetcher: () => void;
      params?: object;
      config?: object;
    }>;
  } = Component;

  const { requiredResources } = PageComponent;

  const searchParams = new URLSearchParams(router.asPath);

  if (requiredResources) {
    await Promise.all(
      itrMap(
        (resource: { key: string; fetcher: () => void }) =>
          getResource(resource, searchParams, queryClient),
        requiredResources
      )
    );
  }

  return {
    pageProps: {
      router,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default NextApp;
