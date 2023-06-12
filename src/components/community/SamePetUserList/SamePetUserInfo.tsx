import { SameUserPetBox, SamePetImage } from "./styled";

interface Props {
  image: string;
  nick: string;
  period: string;
}

const SamePetUserInfo = ({ image, nick, period }: Props) => {
  return (
    <SameUserPetBox>
      <SamePetImage
        className="Same_User_Profile"
        src={image}
        width={64}
        height={64}
        alt="다른 유저의 펫사진"
        isImgExist={!!image}
      />
      <p className="Same_User_Nick">
        {nick}
        <span className="Same_User_Period">{period}</span>
      </p>
    </SameUserPetBox>
  );
};

export default SamePetUserInfo;
