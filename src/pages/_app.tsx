import {
  DehydratedState,
  Hydrate,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import Loader from "@/stories/common/Loader";
import ModalRenderer from "@/stories/common/ModalRenderer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@styles/Icon.scss";
import Header from "@/stories/Header/Header";
import TopNav from "@/stories/Header/TopNav";
import Footer from "@components/common/Footer/Footer";
import PageHead from "@components/meta/common/PageHead";
import GTAGScript from "@components/meta/script/GTAGScript";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import { cookieKeyName } from "@lib/globalConst";
import recoilHydration from "@lib/modules/recoilHydration";
import { Resource } from "@lib/resources";
import tokenParser from "@lib/server/parse/tokenParser";
import DecodedUserInfo from "@lib/types/DecodedUserInfo";
import type { DeviceType, UserAgentType } from "@lib/utils/checkUserAgent";
import createQueryClient from "@lib/utils/createQueryClient";
import NextFontStyle from "@styles/Font.style";
import NextGlobalStyle from "@styles/Global.style";

export interface PageProps {
  dehydratedState: DehydratedState;
  token: string | null;
  ownerToken: string | null;
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

  if (pageProps && pageProps.ownerToken) {
    queryClient.setQueryData(
      [cookieKeyName.owner],
      pageProps.ownerToken || process.env.NEXT_PUBLIC_OWNER || ""
    );
  } else if (pageProps && process.env.NODE_ENV === "development") {
    queryClient.setQueryData(
      [cookieKeyName.owner],
      process.env.NEXT_PUBLIC_OWNER || ""
    );
  }

  // if (pageProps && pageProps.requiredResources) {
  //   for (const resource of pageProps.requiredResources) {
  //     queryClient.setQueryData([resource.name + "_RESOURCE"], resource);
  //   }
  // }

  if (pageProps && pageProps.token) {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${pageProps.token}`;
    const { userInfo } = tokenParser(pageProps.token);
    queryClient.setQueryData([cookieKeyName.userInfo], userInfo);
  }

  // else if (typeof window === 'undefined') {
  //   // 서버 사이드에서만 token을 가져올 수 있음. (http only cookie라서) 즉, token이 없는데 서버 사이드면 로그아웃 상태
  //   sprPetBookClient.defaults.headers.common.Authorization = '';
  //   queryClient.setQueryData([cookieKeyName.userInfo], '');
  // }

  const isOwnerAuthorization =
    pageProps?.ownerToken === process.env.NEXT_PUBLIC_OWNER ||
    queryClient.getQueryData([cookieKeyName.owner]) ===
      process.env.NEXT_PUBLIC_OWNER;

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
          <NextFontStyle />
          <Loader />
          {router.pathname !== "/" && (
            <PageHead currentPath={router.pathname} />
          )}
          <Header
            isScrollUse={true}
            isDevelopment={router.pathname === "/" ? false : true}
            isNeedOwnerAuthor={router.pathname === "/" ? true : false}
            isOwnerAuthorization={isOwnerAuthorization}
          />
          {router.pathname !== "/" && (
            <TopNav
              isScrollUse={router.pathname === "/" ? false : true}
              navView={router.pathname === "/" ? true : false}
              isDevelopment={router.pathname === "/" ? false : true}
            />
          )}
          <Component {...pageProps} />
          <ModalRenderer />
          <GTAGScript />
        </RecoilRoot>
      </Hydrate>
      <Footer currentPath={router.pathname} />
    </QueryClientProvider>
  );
};

export default NextApp;
