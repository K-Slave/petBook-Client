import AuthSelfMask from "@components/common/AuthSelfMask/AuthSelfMask";
import { NextPage } from "next";
import React from "react";

type NextPageWithResource = NextPage & {
  requiredResources?: [];
};

const MyPage: NextPageWithResource = () => {
  return <>tada!</>;
};

export default MyPage;
