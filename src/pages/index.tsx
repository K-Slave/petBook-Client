import React from "react";
import type { NextPage } from "next";
import PageHead from "@components/meta/common/PageHead";
import { useRouter } from "next/router";
import commonServerSideProps from "@lib/server/commonServerSideProps";
import IndexGlobalStyle, { IndexPageMain } from "@styles/indexGlobalStyle";
import LandingFirst from "@components/landing/LandingFirst";
import LandingLoopBanner from "@components/landing/LandingLoopBanner";
import dynamic from "next/dynamic";

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
      <IndexPageMain>
        <LandingFirst />
      </IndexPageMain>
      <LandingLoopBanner />
      {router.query?.owner_author && <OwnerAuthorizationPopup />}
    </>
  );
};

export const getServerSideProps = commonServerSideProps();

export default Home;
