import React, { useState } from "react";
import type { AppProps } from "next/app";
import {
  DehydratedState,
  Hydrate,
  QueryClientProvider,
} from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import Header from "@components/common/Header/Header";
import Loader from "@components/common/loader/loader";
import Modal from "@components/common/Modal";
import TopNav from "@components/common/Nav/TopNav";

import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import createQueryClient from "@lib/utils/createQueryClient";
import DecodedUserInfo from "@lib/types/DecodedUserInfo";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "@styles/Icon.scss";
import "@styles/Swiper.scss";

import recoilHydration from "@lib/modules/recoilHydration";
import tokenParser from "@lib/server/parse/tokenParser";
import { DeviceType, UserAgentType } from "@lib/utils/checkUserAgent";
import localConsole from "@lib/utils/localConsole";
import { cookieKeyName } from "@lib/globalConst";
import PageHead from "@components/meta/common/PageHead";
import { Resource } from "@lib/resources";
import NextGlobalStyle from "@components/GlobalStyle";

export interface PageProps {
  dehydratedState: DehydratedState;
  token: string | null;
  user: DecodedUserInfo | null;
  cookieList: {
    key: string;
    value: any;
  }[];
  device: DeviceType | null;
  agentName: UserAgentType | null;
  requiredResources?: Resource[];
}

type DehydratedAppProps = AppProps<PageProps>;

const NextApp = ({ Component, pageProps, router }: DehydratedAppProps) => {
  const [queryClient] = useState(() => createQueryClient());

  if (pageProps.requiredResources) {
    for (const resource of pageProps.requiredResources) {
      queryClient.setQueryData([resource.name + "_RESOURCE"], resource);
    }
  }

  if (pageProps.token) {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${pageProps.token}`;
    const { userInfo } = tokenParser(pageProps.token);
    queryClient.setQueryData([cookieKeyName.userInfo], userInfo);
  } else if (typeof window === "undefined") {
    // 서버 사이드에서만 token을 가져올 수 있음. (http only cookie라서) 즉, token이 없는데 서버 사이드면 로그아웃 상태
    sprPetBookClient.defaults.headers.common.Authorization = "";
    queryClient.setQueryData([cookieKeyName.userInfo], "");
  }

  if (
    process.env.NODE_ENV === "development" &&
    process.env.NEXT_PUBLIC_TESTER
  ) {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${process.env.NEXT_PUBLIC_TESTER}`;
  }

  // 웹 후크 연동 테스트
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot
          initializeState={({ set, reset }) => {
            recoilHydration(
              {
                set,
                reset,
              },
              router.pathname,
              pageProps.cookieList
            );
          }}
        >
          <NextGlobalStyle />
          <Loader />
          <PageHead currentPath={router.pathname} />
          <Header currentPath={router.pathname} />
          <TopNav currentPath={router.pathname} />
          <Component {...pageProps} />
          <Modal />
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
};

// NextApp.getInitialProps = async (context: AppContext) => {
//   const { Component, router, ctx } = context;
//   const { token, user } = getToken(ctx, { decode: true });
//   const cookieList = getCookieList(ctx, {
//     decode: true,
//   });
//   const queryClient = createQueryClient();
//   let pageProps = {};

//   try {
//     // 소셜 로그인시, url 에 토큰이 붙어있는경우 쿠키로 변환하여 리다이렉트 시켜쥼
//     // if (
//     //   router.asPath.includes("access_token") ||
//     //   router.asPath.includes("refresh_token")
//     // ) {
//     //   urlTokenRedirect(context);
//     // }

//     // 쿠키 획득

//     // if (token) {
//     //   // 보안 옵션을 추가한 쿠키를 현재 접속 시각으로부터 30일 갱신
//     //   ctx.res?.setHeader(
//     //     "Set-Cookie",
//     //     `${keyName.userToken}=${token}; Path=/; SameSite=Strict; Max-Age=2592000; secure; httpOnly;`
//     //   );
//     // }

//     // const locationCookie = cookieList.find(
//     //   (cookie) => cookie.key === keyName.location
//     // );

//     // if (locationCookie) {
//     //   ctx.res?.setHeader(
//     //     "Set-Cookie",
//     //     `${locationCookie.key}=${encodeURIComponent(
//     //       JSON.stringify(locationCookie.value)
//     //     )}; Path=/; SameSite=Strict; Max-Age=2592000; secure;`
//     //   );
//     // }

//     const PageComponent: typeof Component & {
//       requiredResources?: Array<Resource>;
//     } = Component;

//     if (PageComponent.getInitialProps) {
//       pageProps = await PageComponent.getInitialProps(ctx);
//     }

//     // const { requiredResources } = PageComponent;

//     // if (requiredResources) {
//     //   await Promise.all(
//     //     itrMap(
//     //       (resource: Resource) => queryParser(ctx, resource, queryClient),
//     //       requiredResources
//     //     )
//     //   );
//     // }
//     // const searchParams = new URLSearchParams(router.asPath);
//   } catch (e) {
//     console.error(e);
//   }

//   // return {
//   //   pageProps: {
//   //     dehydratedState: dehydrate(queryClient),
//   //     token,
//   //     user,
//   //     cookieList,
//   //     ...pageProps,
//   //   },
//   // };
// };

// // export const getServerSideProps: GetServerSideProps = async (ctx) => {
// //   const token = ctx.params?.token
// //   const invite = await fetch(...)

// //   if ([403, 404].includes(invite.status)) {
// //     return {
// //       notFound: true,
// //     }
// //   }

// //   return {
// //     props: {
// //       ...(await serverSideTranslations(ctx.locale!, ['common'])),
// //       token
// //     },
// //   }
// // }

export default NextApp;
