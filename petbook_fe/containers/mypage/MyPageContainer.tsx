import AuthSelfMask from "@components/common/AuthSelfMask/AuthSelfMask";
import MypetListSection from "@components/mypage/MypetListSection";
import UserInfoSection from "@components/mypage/UserInfoSection";
import React from "react";

const MypageContainer = () => {
  return (
    <>
      <UserInfoSection />
      <AuthSelfMask>
        <section>마이페이지 관리 섹션</section>
      </AuthSelfMask>
      <MypetListSection />
      <section>유저 작성글 섹션</section>
    </>
  );
};

export default MypageContainer;
