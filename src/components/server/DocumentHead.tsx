/* eslint-disable @next/next/no-document-import-in-page */
import { Head } from "next/document";
import React from "react";
import { DocumentOpenGraphTag } from "../meta/common/OpenGraphTag";
import { DocumentTwitterTag } from "../meta/common/TwitterTag";

const DocumentHead = () => {
  return (
    <Head>
      <DocumentOpenGraphTag />
      <DocumentTwitterTag />
    </Head>
  );
};

export default DocumentHead;
