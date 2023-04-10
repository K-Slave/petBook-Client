import ManageSection from "@components/mypage/ManageSection";
import MypetListSection from "@components/mypage/MypetListSection";
import UserInfoSection from "@components/mypage/UserInfoSection";
import React from "react";

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
