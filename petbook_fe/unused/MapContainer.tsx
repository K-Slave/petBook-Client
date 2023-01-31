import { useEffect, useState, PropsWithChildren } from "react";
import { useRecoilState } from "recoil";
import { useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import navigator from "@lib/modules/navigator";
// data
import hospitalData from "@data/all_hospital.json";
import hamsterData from "@data/test_hamster.json";
import rabbitData from "@data/test_rabbit.json";
import { useRouter } from "next/router";

import sortFilterState from "../atoms/pageAtoms/filter/sortFilter";
import MapComponent, { MapData } from "../components/common/MapComponent";
import MapFilterSlider from "./slider";

// import useResource from "../../hooks/useResource";

// Recoil 을 실제 컴포넌트단위에서 사용하는 방법

// 1. const sortFilter = useRecoilValue(sortFilterState)
// 2. const setSortFilter = useSetRecoilState(sortFilterState)
// 3. const [sortFilter, setSortFilter] = useRecoilState(sortFilterState)

// 크게 위의 3가지 사용방식이 있는데, 각 차이점이 있습니다.

// 1. useRecoilValue
// 선언문법 : const 사용할 객체이름 = useRecoilValue(가져올 atom)
// ->>> const sortFilter = useRecoilValue(sortFilterState)

// 얘는 atom 객체를 가져와서, state 값을 읽을수 있도록 해주는 hook 입니다.
// Read Only 이며, 선언한 순간 구독 되므로 state 가 변하게 되면
// 구독중인 모든 컴포넌트가 리렌더링 됩니다.

// 2. useSetRecoilState
// 선언문법 : const set + 사용할 객체이름 = useSetRecoilState(가져올 atom)
// ->>> const setSortFilter = useSetRecoilState(sortFilterState)

// 얘는 atom 객체에 새로운 state 값을 입힐수 있게 해주는 Setter hook 입니다.
// Write Only 이며, 선언하더라도 state 의 값이 구독되지 않습니다 !
// 내부적으로 atom 객체값은 최신화 하여 가지고 있지만
// 선언한 컴포넌트가 리렌더링 되지는 않습니다.

// 3. useRecoilState
// 선언문법 : const [사용할 객체이름, 사용할 setter 객체이름] = useRecoilState(가져올 atom)
// ->>> const [sortFilter, setSortFilter] = useRecoilState(sortFilterState)

// useState 와 사용법이 아주아주아주 유사하며,
// useRecoilValue 처럼 구독되고 useSetRecoilState 처럼 set 할수 있습니다.
// 따라서 상황에 맞게 사용하면 됩니다.

// Container 는, 각 컴포넌트들에게 데이터를 나눠주기 위한 곳
// API 결과값이나 전역 상태값등을 Props 로 전달.
// List - Item 형태의 컴포넌트들은 이러한 Props 구조가 성능이 좋습니다.

const Main = styled.main`
  height: calc(100vh - 125px);
  width: 100vw;
  overflow: hidden;
  position: relative;
`;
const CategoryFilterWrap = styled.ul`
  position: absolute;
  z-index: 999;
  left: 20px;
  top: 20px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`;

const CatergoryFilterItem = styled.li<{ active: boolean }>`
  button {
    text-align: center;
    font-size: 12px;
    border-right: solid 1px var(--bg);
    padding: 8px 20px;
    color: ${(props) => (props.active === true ? "#fff" : "#111")};
    background-color: ${(props) =>
      props.active === true ? "var(--primary)" : "#fff"};
    font-weight: bold;
  }
  &:last-child button {
    border-right: none;
  }
`;

const category = [
  {
    id: 0,
    name: "전체",
    value: "all",
    active: true,
  },
  {
    id: 1,
    name: "햄스터",
    value: "ham",
    active: false,
  },
  {
    id: 2,
    name: "토끼",
    value: "rabbit",
    active: false,
  },
];

type ButtonType = {
  id: number;
  name: string;
  value: string;
  active: boolean;
}[];

interface Props {
  buttonState: ButtonType;
  changeCategory: (el: number) => void;
}

export const CategoryFilter = ({ buttonState, changeCategory }: Props) => {
  return (
    <CategoryFilterWrap>
      {buttonState &&
        buttonState.map((item) => {
          return (
            <CatergoryFilterItem
              onClick={() => changeCategory(item.id)}
              active={item.active}
              key={item.id}
            >
              <button type="button">{item.name}</button>
            </CatergoryFilterItem>
          );
        })}
    </CategoryFilterWrap>
  );
};

const MapContainer = () => {
  // const hospitalData = useResource(hospitalResource) // <- react-query 로 가져오는 API 데이터 (server-side-data store)
  const [sortFilter, setSortFilter] = useRecoilState(sortFilterState); // <- recoil 에서 사용하는 전역 상태값. (client-side-state store)
  const [mapData, setMapdata] = useState<MapData>([]); // <- recoil 에서 사용하는 전역 상태값. (client-side-state store)
  const [buttonState, setButtonState] = useState(category);
  const router = useRouter();

  useEffect(() => {
    if (sortFilter.sortKey === "distance") {
      setSortFilter((filter) => ({
        // <- 함수형 업데이트에서 익명 함수에 매개변수를 선언하게되면 현재 state 값이 들어옵니다.
        ...sortFilter, // <- 현재 상태를 불변성을 지키도록 복사해주고
        // sortValue: exampleHashMap.get("distance"), // <- 바로 state 객체 프로퍼티에 새 값을 써줍니다.
      }));
    }
  }, [sortFilter.sortKey]); // <- sortFilter 의 key 값이 변하면 실행됨.

  const changeCategory = (el: number) => {
    const newArr = buttonState.map((element) => {
      element.active = false;
      return element;
    });

    newArr[el] = {
      ...buttonState[el],
      active: true,
    };

    setButtonState([...newArr]);
  };

  useEffect(() => {
    switch (router.query.find) {
      case "all": {
        setMapdata(hospitalData);
        break;
      }
      case "ham": {
        setMapdata(hamsterData);
        break;
      }
      case "rabbit": {
        setMapdata(rabbitData);
        break;
      }
      default: {
        setMapdata(hospitalData);
        break;
      }
    }
  }, [router]);

  useEffect(() => {
    const call = buttonState.filter((item) => {
      return item.active === true;
    });
    switch (call[0]?.value) {
      case "ham": {
        navigator({ url: "/findHospital?find=ham" });
        break;
      }
      case "rabbit": {
        navigator({ url: "/findHospital?find=rabbit" });
        break;
      }
      default: {
        navigator({ url: "/findHospital?find=all" });
      }
    }
  }, [buttonState]);

  return (
    <Main>
      <MapContainer.CategoryFilter
        changeCategory={changeCategory}
        buttonState={buttonState}
      />
      <MapFilterSlider />
      <MapComponent mapData={mapData} />
    </Main>
  );
};
MapContainer.CategoryFilter = CategoryFilter;

export default MapContainer;
