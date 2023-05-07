/* eslint-disable @next/next/no-document-import-in-page */
import { Head } from "next/document";
import React from "react";
import { DocumentOpenGraphTag } from "../meta/common/OpenGraphTag";
import { DocumentTwitterTag } from "../meta/common/TwitterTag";

const DocumentHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />

      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      <meta http-equiv="cache-control" content="max-age=3540" />

      <meta name="keywords" content="petbook" />
      <meta http-equiv="imagetoolbar" content="no" />

      <meta content="1 Days" name="revisit-after" />
      <meta name="robots" content="all" />
      <DocumentOpenGraphTag />
      <DocumentTwitterTag />
    </Head>
  );
};

export default DocumentHead;
