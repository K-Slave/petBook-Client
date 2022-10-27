import React, { useState } from "react";
import type { AppContext, AppProps } from "next/app";
import {
  dehydrate,
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import cookies from "next-cookies";
import urlTokenRedirect from "@lib/API/parser/urlTokenRedirect";
import { RecoilRoot } from "recoil";
import queryParser from "@lib/API/parser/queryParser";
import HtmlHeader from "@components/common/HtmlHeader";
import Cookies from "js-cookie";
import { Router } from "next/router";
import CommonHeader from "../components/common/CommonHeader";
import { itrMap } from "../lib/utils/iterableFunctions";

import "../styles/Globals.scss";

type DehydratedAppProps = AppProps & {
  initProps: { router: Router; dehydratedState: DehydratedState };
};

const NextApp = ({ Component, initProps, router }: DehydratedAppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 300000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={initProps.dehydratedState}>
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

  // 소셜 로그인시, url 에 토큰이 붙어있는경우 쿠키로 변환하여 리다이렉트 시켜쥼
  if (
    router.asPath.includes("access_token") ||
    router.asPath.includes("refresh_token")
  ) {
    urlTokenRedirect(context);
  }

  // 쿠키 획득
  const allCookies = cookies(ctx);

  // 쿠키 만료기간 현재 접속 시각으로부터 30일 갱신
  if (allCookies && allCookies.petBookUser) {
    Cookies.set("petBookUser", allCookies.petBookUser, { expires: 30 });
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 300000,
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
  // const searchParams = new URLSearchParams(router.asPath);
  const { query } = ctx;

  if (requiredResources) {
    await Promise.all(
      itrMap(
        (resource: { key: string; fetcher: () => void }) =>
          queryParser(resource, query, queryClient),
        requiredResources
      )
    );
  }

  return {
    initProps: {
      router,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default NextApp;
