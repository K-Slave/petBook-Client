import React, { PropsWithChildren } from "react";
import {
  UserFollowButton,
  UserImage,
  UserImageWrapDiv,
  UserInfoContentDiv,
  UserInfoH1,
  UserNameSpan,
  UserYearSpan,
} from "./style/UserInfoSection";
import Image from "next/image";
import { AuthSelfHiddenMask } from "@components/common/AuthSelfMask/AuthSelfMask";
import mypageImg from "@/image/mypageImg";

const UserInfoSection = () => {
  return (
    <UserInfoSection.Wrap>
      <UserInfoSection.Content>
        <UserInfoSection.Profile userImg={mypageImg.defaultUserImg} />
        <UserInfoSection.Name userName="유저닉넴" />
        <UserInfoSection.Year userYear="1" />
      </UserInfoSection.Content>
      <AuthSelfHiddenMask>
        <UserInfoSection.Follow isFollowUser={false} isSelfPage={false} />
      </AuthSelfHiddenMask>
    </UserInfoSection.Wrap>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return <UserInfoH1 className="User__Info__Wrap">{children}</UserInfoH1>;
};

const Content = ({ children }: PropsWithChildren<any>) => {
  return (
    <UserInfoContentDiv className="User__Info__Content">
      {children}
    </UserInfoContentDiv>
  );
};

interface ImageProps {
  userImg: string;
}

const Profile = ({ userImg }: ImageProps) => {
  return (
    <UserImageWrapDiv className="User__Image__Wrap">
      <UserImage
        className="User__Profile__Image"
        src={userImg}
        width="160"
        height="160"
        alt="유저 프로필 이미지"
      />
    </UserImageWrapDiv>
  );
};

interface NameProps {
  userName: string;
}

const Name = ({ userName }: NameProps) => {
  return <UserNameSpan className="User__Info__Name">{userName}</UserNameSpan>;
};

interface YearProps {
  userYear: string;
}

const Year = ({ userYear }: YearProps) => {
  return (
    <UserYearSpan className="User__Info__Year">{userYear}년차</UserYearSpan>
  );
};

interface FollowProps {
  isSelfPage: boolean;
  isFollowUser: boolean;
}

const Follow = ({ isSelfPage, isFollowUser }: FollowProps) => {
  return (
    <UserFollowButton className="User__Follow__Button" type="button">
      <Image
        className="User__Follow__Icon"
        src={mypageImg.follow}
        width="12"
        height="12"
        alt="팔로우 버튼 아이콘"
      />
      팔로우
    </UserFollowButton>
  );
};

UserInfoSection.Wrap = Wrap;
UserInfoSection.Content = Content;
UserInfoSection.Profile = Profile;
UserInfoSection.Name = Name;
UserInfoSection.Year = Year;
UserInfoSection.Follow = Follow;

export default UserInfoSection;
