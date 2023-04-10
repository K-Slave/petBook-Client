import Image from "next/image";
import React from "react";
import styled from "styled-components";

const MypetShortProfileButton = styled.button`
  display: grid;
  grid-template-columns: 3.75rem 5.625rem;
  grid-template-rows: 1.875rem 1.875rem;
  justify-items: flex-start;
  column-gap: 16px;

  width: 12.375rem;
  height: 5.25rem;

  padding: 0.75rem 1rem;

  background-color: #ffffff;
  border-radius: 8px;

  .Mypet__Profile__Name {
    align-self: flex-end;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: -0.02em;
    color: #565653;
  }

  .Mypet__Profile__Info {
    align-self: flex-start;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: -0.02em;
    color: #92928e;
  }
`;

const MyperProfileImage = styled(Image)<{ isImgExist: boolean }>`
  position: relative;
  border-radius: 50%;

  grid-row-start: 1;
  grid-row-end: 3;

  &::before {
    position: relative;
    z-index: 10;

    display: ${(props) => (props.isImgExist ? "none" : "block")};

    width: 3.75rem;
    height: 3.75rem;
    content: "";

    background-color: #383835;
  }
`;

interface Props {
  image: string;
  name: string;
  gender: string;
  age: string;
}

const MypetShortProfile = ({ image, name, gender, age }: Props) => {
  return (
    <MypetShortProfileButton className="Mypet__Profile__Wrap" type="button">
      <MyperProfileImage
        className="Mypet__Profile__Img"
        src={image}
        width={60}
        height={60}
        alt="내 아이 사진"
        isImgExist={!!image}
      />
      <span className="Mypet__Profile__Name">{name}</span>
      {gender && (
        <span className="Mypet__Profile__Info">
          {gender === "M" ? "남아" : "여아"} / {age}살
        </span>
      )}
    </MypetShortProfileButton>
  );
};

export default MypetShortProfile;
