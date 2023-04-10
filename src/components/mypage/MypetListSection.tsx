import React, { PropsWithChildren } from "react";
import MypetShortProfile from "./MypetShortProfile";
import {
  MypetListDiv,
  MypetListSectionBox,
  MypetListTitleH1,
} from "./style/MypetListSection.style";

const mypet: {
  image: string;
  name: string;
  gender: "M" | "F";
  age: string;
} = {
  image: "",
  name: "아아아히",
  gender: "M",
  age: "13",
};

const data: {
  image: string;
  name: string;
  gender: "M" | "F";
  age: string;
}[] = new Array(20).fill(mypet);

const MypetListSection = () => {
  // TODO : 데이터 리스트 받아오는 useResource 필요

  return (
    <MypetListSection.Wrap>
      <MypetListSection.Title username="유저닉넴" totalCnt={data.length} />
      <MypetListSection.List mypetList={data} />
    </MypetListSection.Wrap>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return (
    <MypetListSectionBox className="Mypet__List__Section">
      {children}
    </MypetListSectionBox>
  );
};

interface TitleProps {
  username: string; // TODO
  totalCnt: number;
}

const Title = ({ username, totalCnt }: TitleProps) => {
  return (
    <MypetListTitleH1 className="Mypet__List__Title">
      <p className="Mypet__List__Info">
        <span className="Mypet__Info__User">{username}님의 아이들</span>
        {totalCnt > 12 && (
          <span className="Mypet__Info__Count">+{totalCnt - 12}마리</span>
        )}
      </p>
      <button className="Mypet__More__Button" type="button">
        <span className="Mypet__More__Text">더보기</span>
      </button>
    </MypetListTitleH1>
  );
};

interface ListProps {
  mypetList: {
    image: string;
    name: string;
    gender: "M" | "F";
    age: string;
  }[]; // TODO
}

const List = ({ mypetList }: ListProps) => {
  return (
    <MypetListDiv
      className="Mypet__List__Wrap"
      isTwoLine={mypetList.length > 6}
    >
      {mypetList.slice(0, 12).map((mypetItem, idx) => (
        // TODO: 키값 변경 및 MypetShortProfile 에서 필요한 props 수정하기
        <MypetShortProfile
          key={idx}
          image={mypetItem.image}
          name={mypetItem.name}
          gender={mypetItem.gender}
          age={mypetItem.age}
        />
      ))}
    </MypetListDiv>
  );
};

MypetListSection.Wrap = Wrap;
MypetListSection.List = List;
MypetListSection.Title = Title;

export default MypetListSection;
