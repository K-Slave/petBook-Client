import SearchBar from "@components/common/SearchBar";
import navigator from "@lib/modules/navigator";
import getRandomKey from "@lib/utils/getRandomKey";
import { useRouter } from "next/router";
import HospitalItem from "../HospitalItem";
import { FilterButton, FilterDiv, Section } from "./styled";

const HospitalList = () => {
  return (
    <Section>
      <SearchBar
        placeholder="원하는 위치를 검색해보세요!"
        baseUrl="/hospitalmap"
      />
      <header>
        <h1>강남구 역삼1동</h1>
        <button type="button">위치수정</button>
      </header>
      <HospitalList.Filter />
      <div className="Item_Wrapper">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <HospitalItem key={getRandomKey()} id={index} />
          ))}
      </div>
    </Section>
  );
};

const FILTERS = ["모든 동물", "햄스터", "토끼"];

const Filter = () => {
  const router = useRouter();
  const { filter } = router.query;
  const selectFilter = (name: string) => () => {
    const params = new URLSearchParams(router.asPath.split("?")[1]);
    params.delete("filter");
    const path =
      params.toString().length !== 0
        ? `/hospitalmap?${params.toString()}&filter=${name}`
        : `/hospitalmap?filter=${name}`;
    navigator({
      url: path,
      options: {
        shallow: true,
      },
    });
  };
  return (
    <FilterDiv>
      {FILTERS.map((name) => (
        <FilterButton
          selected={(filter as string) || FILTERS[0]}
          name={name}
          type="button"
          key={name}
          onClick={selectFilter(name)}
        >
          {name}
        </FilterButton>
      ))}
    </FilterDiv>
  );
};

HospitalList.Filter = Filter;

export default HospitalList;
