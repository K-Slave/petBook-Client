import Head from "next/head";
import React from "react";
import PageHead from "../common/PageHead";

const IndexPageHead = ({ currentPath }: { currentPath: string }) => {
  return (
    <Head>
      <PageHead currentPath={currentPath} />
    </Head>
  );
};

export default IndexPageHead;
