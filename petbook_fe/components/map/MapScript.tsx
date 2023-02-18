import Script from "next/script";
import React from "react";

const MapScript = ({ onLoad }: { onLoad: () => void }) => {
  return (
    <Script
      defer
      type="text/javascript"
      src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d5c682ad42a1b2dc53379222a3b46761&libraries=services,clusterer&autoload=false"
      strategy="afterInteractive"
      onLoad={onLoad}
    />
  );
};

export default React.memo(MapScript);
