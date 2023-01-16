import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import type { AppContext, AppProps } from "next/app";
import {
  dehydrate,
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import cookies from "next-cookies";
import urlTokenRedirect from "@lib/API/parser/urlTokenRedirect";
import Loader from "@components/common/loader/loader";
import { RecoilRoot } from "recoil";
import queryParser from "@lib/API/parser/queryParser";
import HtmlHeader from "@components/common/HtmlHeader";
import Modal from "@components/common/Modal";
import { Router } from "next/router";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import localConsole from "@lib/utils/localConsole";
import CommonHeader from "../components/common/CommonHeader";
import { itrMap } from "../lib/utils/iterableFunctions";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "../styles/Globals.scss";
import "../styles/Icon.scss";
import "../styles/Swiper.scss";

let serverData = "";

type DehydratedAppProps = AppProps & {
  initProps: {
    router: Router;
    dehydratedState: DehydratedState;
    token: string;
  };
};

const NextApp = ({
  Component,
  initProps,
  router,
  pageProps,
}: DehydratedAppProps) => {
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

  if (initProps.token && typeof window === "undefined") {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${initProps.token}`;
  }

  if (process.env.NEXT_PUBLIC_TESTER) {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${process.env.NEXT_PUBLIC_TESTER}`;
  }

  // 웹 후크 연동 테스트

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={initProps.dehydratedState}>
        <RecoilRoot>
          <Loader />
          <HtmlHeader />
          <CommonHeader pathname={router.pathname} />
          <Component {...pageProps} />
          <Modal />
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
};

NextApp.getInitialProps = async (context: AppContext) => {
  const { Component, router, ctx } = context;
  const allCookies = cookies(ctx);
  let pageProps = {};

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 300000,
      },
    },
  });

  try {
    // 소셜 로그인시, url 에 토큰이 붙어있는경우 쿠키로 변환하여 리다이렉트 시켜쥼
    if (
      router.asPath.includes("access_token") ||
      router.asPath.includes("refresh_token")
    ) {
      urlTokenRedirect(context);
    }

    // 쿠키 획득

    if (allCookies && allCookies.petBookUser) {
      // 보안 옵션을 추가한 쿠키를 현재 접속 시각으로부터 30일 갱신
      ctx.res?.setHeader(
        "Set-Cookie",
        `petBookUser=${allCookies.petBookUser}; Path=/ SameSite=Strict; Max-Age=2592000; secure; httpOnly`
      );

      serverData = jwt_decode(allCookies.petBookUser);

      sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${allCookies.petBookUser}`;
    }

    localConsole?.log(serverData, "serverData");

    const PageComponent: typeof Component & {
      requiredResources?: Array<{
        key: any[];
        fetcher: () => void;
        params?: object;
        config?: object;
      }>;
    } = Component;

    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx);
    }

    const { requiredResources } = PageComponent;
    const { query } = ctx;

    if (requiredResources) {
      await Promise.all(
        itrMap(
          (resource: { key: any[]; fetcher: () => void }) =>
            queryParser(resource, query, queryClient),
          requiredResources
        )
      );
    }
    // const searchParams = new URLSearchParams(router.asPath);
  } catch (e) {
    console.error(e);
  }

  return {
    initProps: {
      router,
      dehydratedState: dehydrate(queryClient),
      token: allCookies?.petBookUser,
    },
    pageProps,
  };
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const token = ctx.params?.token
//   const invite = await fetch(...)

//   if ([403, 404].includes(invite.status)) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {
//       ...(await serverSideTranslations(ctx.locale!, ['common'])),
//       token
//     },
//   }
// }

export default NextApp;
