import React from "react";
import ManageSection from "@components/mypage/ManageSection";
import MypetListSection from "@components/mypage/MypetListSection";
import UserInfoSection from "@components/mypage/UserInfoSection";

const MypageContainer = () => {
  return (
    <>
      <UserInfoSection />
      <ManageSection />
      <MypetListSection />
      <section>유저 작성글 섹션</section>
    </>
  );
};

export default MypageContainer;
