// @ts-nocheck
import Script from "next/script";
import React, { useEffect } from "react";

const GTAGScript = () => {
  useEffect(() => {
    setTimeout(() => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-CKMJ0JWT9R");
    }, 400);
  });
  return (
    <Script
      id="GTAG"
      src="https://www.googletagmanager.com/gtag/js?id=G-CKMJ0JWT9R"
      defer
      strategy="afterInteractive"
    />
  );
};

export default GTAGScript;
