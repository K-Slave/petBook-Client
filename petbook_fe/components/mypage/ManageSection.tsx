import AuthSelfMask from "@components/common/AuthSelfMask/AuthSelfMask";
import React, { PropsWithChildren } from "react";

const ManageSection = () => {
  return <ManageSection.Wrap>마이페이지 관리 섹션</ManageSection.Wrap>;
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return (
    <AuthSelfMask>
      <section>{children}</section>
    </AuthSelfMask>
  );
};

ManageSection.Wrap = Wrap;

export default ManageSection;
