import React from "react";

interface Props {
  title?: string;
  desc?: string;
  url?: string;
  siteImg?: string;
}

const TwitterTag = ({ title, desc, url, siteImg }: Props) => {
  return (
    <>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@petbook" />
      <meta name="twitter:creator" content="@petbook" />
      <meta name="twitter:domain" content="petbook.com" />
      <meta
        name="twitter:title"
        content={`${title ? title : ""}`}
        data-rh="true"
      />
      <meta
        name="twitter:description"
        content={`${desc ? desc : ""}`}
        data-rh="true"
      />
      <meta name="twitter:url" content={`${url ? url : ""}`} data-rh="true" />
      <meta
        name="twitter:image"
        content={`${siteImg ? siteImg : ""}`}
        data-rh="true"
      />
      <meta name="twitter:app:name:iphone" content="petbook" />
      <meta name="twitter:app:name:googleplay" content="petbook" />
    </>
  );
};

export const DocumentTwitterTag = () => {
  return (
    <>
      <meta name="twitter:site" content="@petbook" />
      <meta name="twitter:creator" content="@petbook" />
      <meta name="twitter:domain" content="petbook.com" />
      <meta name="twitter:app:name:iphone" content="petbook" />
      <meta name="twitter:app:name:googleplay" content="petbook" />
    </>
  );
};

export default TwitterTag;
