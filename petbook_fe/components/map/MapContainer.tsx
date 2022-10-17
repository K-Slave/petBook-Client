import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import sortFilterState from "../../atoms/componentAtoms/filter/sortFilter";
import MapComponent from "../common/MapComponent";
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

const MapContainer = () => {
  // 지금은 병원정보가 없기때문에 그냥 데이터를 객체로 바로 선언해서 사용.
  const sample_hospitalData = [
    "안산 종합 동물병원",
    "아프리카 동물병원",
    "건국대학교 수의대 병원",
  ];

  // const hospitalData = useResource(hospitalResource) // <- react-query 로 가져오는 API 데이터 (server-side-data store)
  const [sortFilter, setSortFilter] = useRecoilState(sortFilterState); // <- recoil 에서 사용하는 전역 상태값. (client-side-state store)

  useEffect(() => {
    if (sortFilter.sortKey === "distance") {
      setSortFilter((sortFilter) => ({
        // <- 함수형 업데이트에서 익명 함수에 매개변수를 선언하게되면 현재 state 값이 들어옵니다.
        ...sortFilter, // <- 현재 상태를 불변성을 지키도록 복사해주고
        // sortValue: exampleHashMap.get("distance"), // <- 바로 state 객체 프로퍼티에 새 값을 써줍니다.
      }));
    }
  }, [sortFilter.sortKey]); // <- sortFilter 의 key 값이 변하면 실행됨.

  return (
    <>
      <Main>
        <MapFilterSlider />
        <MapComponent />
      </Main>
    </>
  );
};

export default MapContainer;
