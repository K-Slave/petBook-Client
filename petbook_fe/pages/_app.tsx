import React, { useState } from "react";
import type { AppContext, AppProps } from "next/app";
import {
  dehydrate,
  DehydratedState,
  Hydrate,
  QueryClientProvider,
} from "@tanstack/react-query";
import urlTokenRedirect from "@lib/API/parser/urlTokenRedirect";
import { RecoilRoot } from "recoil";
import queryParser from "@lib/API/parser/queryParser";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import type { Key } from "@lib/hooks/common/useResource";
import { itrMap } from "@lib/utils/iterableFunctions";
import createQueryClient from "@lib/utils/createQueryClient";
import getToken from "@lib/utils/getToken";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "../styles/Globals.scss";
import "../styles/Icon.scss";
import "../styles/Swiper.scss";
import ComponentsRoot from "@containers/ComponentsRoot";
import Header from "@components/common/Header/Header";
import HtmlHead from "@components/common/HtmlHead";
import Loader from "@components/common/loader/loader";
import Modal from "@components/common/Modal";
import TopNav from "@components/common/Nav/TopNav";
import DecodedUserInfo from "@lib/types/DecodedUserInfo";

type DehydratedAppProps = AppProps<{
  dehydratedState: DehydratedState;
  token: string;
  user: DecodedUserInfo;
}>;

const NextApp = ({ Component, pageProps, router }: DehydratedAppProps) => {
  const [queryClient] = useState(() => createQueryClient());

  if (pageProps.token && typeof window === "undefined") {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${pageProps.token}`;
  }

  if (
    process.env.NODE_ENV === "development" &&
    process.env.NEXT_PUBLIC_TESTER
  ) {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${process.env.NEXT_PUBLIC_TESTER}`;
  }

  if (pageProps.user) {
    queryClient.setQueryData(["user"], pageProps.user);
  }

  // 웹 후크 연동 테스트

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <Loader />
          <HtmlHead currentPath={router.pathname} />
          <Header currentPath={router.pathname} />
          <TopNav currentPath={router.pathname} />
          <Component />
          <Modal />
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
};

NextApp.getInitialProps = async (context: AppContext) => {
  const { Component, router, ctx } = context;
  const { token, user } = getToken(ctx, { decode: true });
  const queryClient = createQueryClient();
  let pageProps = {};

  try {
    // 소셜 로그인시, url 에 토큰이 붙어있는경우 쿠키로 변환하여 리다이렉트 시켜쥼
    if (
      router.asPath.includes("access_token") ||
      router.asPath.includes("refresh_token")
    ) {
      urlTokenRedirect(context);
    }

    // 쿠키 획득

    if (token) {
      // 보안 옵션을 추가한 쿠키를 현재 접속 시각으로부터 30일 갱신
      ctx.res?.setHeader(
        "Set-Cookie",
        `petBookUser=${token}; Path=/; SameSite=Strict; Max-Age=2592000; secure; httpOnly;`
      );
    }

    const PageComponent: typeof Component & {
      requiredResources?: Array<{
        key: Key;
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
          (resource: { key: Key; fetcher: () => void }) =>
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
    pageProps: {
      dehydratedState: dehydrate(queryClient),
      token,
      user,
      ...pageProps,
    },
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
