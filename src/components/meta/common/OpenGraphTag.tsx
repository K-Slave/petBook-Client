import Head from "next/head";
import React from "react";

interface Props {
  title?: string;
  desc?: string;
  url?: string;
  siteImg?: string;
}

const OpenGraphTag = ({ title, desc, url, siteImg }: Props) => {
  return (
    <Head>
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content="petbook" />
      <meta property="og:url" content={url ? url : ""} />
      <meta property="og:title" content={title ? title : ""} />
      <meta property="og:description" content={desc ? desc : ""} />
      <meta property="og:image" content={siteImg ? siteImg : ""} />
      <meta property="og:image:secure_url" content={siteImg ? siteImg : ""} />
      <meta property="og:image:type" content="image/jpeg" />
      {/* TODO : 대표 og 이미지 크기 설정 */}
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />
      <meta property="og:image:alt" content={title ? title : ""} />
    </Head>
  );
};

export const DocumentOpenGraphTag = () => {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content="petbook" />
    </>
  );
};

export default OpenGraphTag;
