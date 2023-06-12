//import { useResource } from "@lib/hooks/common/useResource"; // 추후사용
import SamePetUserInfo from "./SamePetUserInfo";
import { BoxGrid } from "./styled";

const SameUser: {
  image: string;
  nick: string;
  period: string;
} = {
  image: "",
  nick: "토리네",
  period: "1년차",
};

const SameUserInfo: {
  image: string;
  nick: string;
  period: string;
}[] = new Array(10).fill(SameUser);

const SamePetUserList = () => {
  // TODO - useResource

  return <SamePetUserList.List sameUserPetList={SameUserInfo} />;
};

interface ListProps {
  sameUserPetList: {
    image: string;
    nick: string;
    period: string;
  }[];
}

const List = ({ sameUserPetList }: ListProps) => {
  // const { data } = useResource({
  //   resource:  //TODO,
  //   payload,
  // });
  return (
    <>
      {SameUser.nick.length === null || "" ? (
        <p>로그인하면 나와 같은 펫을 키우는 작가를 만날 수 있어요!</p>
      ) : (
        <BoxGrid>
          {sameUserPetList.slice(0, 6).map((SamePet, index) => (
            <SamePetUserInfo
              key={index}
              image={SamePet.image}
              nick={SamePet.nick}
              period={SamePet.period}
            />
          ))}
        </BoxGrid>
      )}
    </>
  );
};

SamePetUserList.List = List;

export default SamePetUserList;
