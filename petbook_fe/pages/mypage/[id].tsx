import AuthSelfMask from "@components/common/AuthSelfMask/AuthSelfMask";
import { NextPage } from "next";
import React, { useState } from "react";

type NextPageWithResource = NextPage & {
  requiredResources?: [];
};

const MyPage: NextPageWithResource = () => {
  const [isOpen, setIsOpen] = useState(false);
  const temp = "";
  const temp1 = "";
  const temp2 = "";

  return (
    <AuthSelfMask>
      <div></div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      ></button>
      <section></section>
      <article></article>
      {isOpen && <Popup></Popup>}
    </AuthSelfMask>
  );
};

const Popup = () => {
  return <AuthSelfMask></AuthSelfMask>;
};

export default MyPage;
