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
import TopNav from "../components/common/Nav/Interface/TopNav";
import { useRouter } from "next/router";
import Header from "../components/common/Nav/Interface/Header";

// import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
// import { redirect, sendStatusCode } from "next/dist/server/api-utils";

export default function NextApp(appInitProps: AppProps) {
  const { Component, pageProps } = appInitProps;

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

  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <HtmlHeader />
          <div className='Header__Wrap'>
            <Header path={router.pathname} />
            <TopNav path={router.pathname} />
          </div>
          <div className='Header__Spacer' />

          <Component {...pageProps} />
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
    redirect(context);
  }

  const page: any = Component;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

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
