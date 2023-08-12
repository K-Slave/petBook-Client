import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import LandingFirst from "@components/landing/LandingFirst";
import LandingLoopBanner from "@components/landing/LandingLoopBanner";
import LandingNotice from "@components/landing/LandingNotice";
import LandingSecond from "@components/landing/LandingSecond";
import LandingThird from "@components/landing/LandingThird";
import PageHead from "@components/meta/common/PageHead";
import commonServerSideProps from "@lib/server/commonServerSideProps";
import IndexGlobalStyle, { IndexPageMain } from "@styles/indexGlobalStyle";

const OwnerAuthorizationPopup = dynamic(
  () => import("@components/landing/OwnerAuthorizationPopup"),
  { ssr: false }
);
// owner_author
const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <PageHead currentPath={router.pathname} />
      <IndexGlobalStyle />
      <LandingLoopBanner />
      <IndexPageMain>
        <LandingFirst />
        <LandingSecond />
        {/* <LandingThird /> */}
        <LandingNotice />
      </IndexPageMain>
      {router.query?.owner_author && <OwnerAuthorizationPopup />}
    </>
  );
};

export const getServerSideProps = commonServerSideProps();

export default Home;
