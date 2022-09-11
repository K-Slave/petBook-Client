import styled from "styled-components";
import { CgGenderFemale } from "react-icons/cg";
import Skeletone from "../Skeletone";
import Palette from "../../../lib/_palette";
import { PropsWithChildren } from "react";

const ProfileCardBox = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 1.25rem;

  transition: all 0.3s ease-in-out;

  background-color: #fff;
  border-radius: 0.9375rem;

  border: 1px solid ${Palette.teal[9]};

  .${(props: ProfileCardType) => props.cardname}Profile-Image {
    width: 100%;
    height: 8.4375rem;
  }

  .${(props: ProfileCardType) => props.cardname}Profile__Info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    white-space: nowrap;

    width: 100%;
    height: 2.4375rem;

    padding: 0 0.75rem 0.25rem 0.75rem;

    background-color: ${Palette.teal[1]};
    border-radius: 0.625rem;
  }

  svg {
    margin-top: 0.3rem;
  }
`;

const ProfileSkeletone = styled(Skeletone)`
  width: 100%;
  height: 65%;

  border-radius: 0.625rem;
`;

type ProfileCardType = {
  className?: string;
  cardname?: string;
  username?: string;
  user_age?: number;
  image?: string;
  sectionTitle?: string;
  style?: React.CSSProperties;
};

export default function ProfileCard(props: PropsWithChildren<ProfileCardType>) {
  const { cardname, username, user_age } = props;

  return (
    <ProfileCardBox {...props}>
      <ProfileSkeletone />
      {/* <img className='Profile-Image' src='' alt=''></img> */}
      <p className={cardname + "Profile__Info"}>
        <span className={cardname + "Profile__Text"}>
          {username} / {user_age}
        </span>
        <CgGenderFemale />
      </p>
    </ProfileCardBox>
  );
}
