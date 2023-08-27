import {
  DehydratedState,
  Hydrate,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import Loader from "@/stories/common/Loader";
import ModalRenderer from "@/stories/common/ModalRenderer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@styles/Icon.scss";
import Footer from "@components/common/Footer/Footer";
import PageHead from "@components/meta/common/PageHead";
import GTAGScript from "@components/meta/script/GTAGScript";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import { cookieKeyName } from "@lib/globalConst";
import recoilHydration from "@lib/modules/recoilHydration";
import { Resource } from "@lib/resources";
import tokenParser from "@lib/server/parse/tokenParser";
import DecodedUserInfo from "@lib/types/DecodedUserInfo";
import createQueryClient from "@lib/utils/createQueryClient";
import type {
  DeviceType,
  UserAgentType,
} from "@lib/utils/userAgent/checkUserAgent";
import NextFontStyle from "@styles/Font.style";
import NextGlobalStyle from "@styles/Global.style";

const Header = dynamic(() => import("@/stories/Header/Header"), {});
const TopNav = dynamic(() => import("@/stories/Header/TopNav"), {});

export interface PageProps {
  dehydratedState: DehydratedState;
  userToken: string | null;
  ownerToken: string | null;
  decodedTokenValue: DecodedUserInfo | null;
  cookieList: Partial<{
    [key: string]: string;
  }> | null;
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

  if (pageProps && pageProps.userToken) {
    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${pageProps.userToken}`;
    const { userInfo } = tokenParser(pageProps.userToken);
    queryClient.setQueryData([cookieKeyName.userInfo], userInfo);
  }

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
          {(pageProps.device !== "mobile" || router.pathname === "/") && (
            <Header
              pathname={router.pathname}
              isScrollUse={true}
              isDevelopment={router.pathname === "/" ? false : true}
              isNeedOwnerAuthor={router.pathname === "/" ? true : false}
              isOwnerAuthorization={isOwnerAuthorization}
            />
          )}
          {pageProps.device !== "mobile" && router.pathname !== "/" && (
            <TopNav
              pathname={router.pathname}
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
