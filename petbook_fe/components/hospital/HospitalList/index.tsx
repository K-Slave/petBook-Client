import Pagination from "@components/common/Pagination";
import { usePage } from "@components/common/Pagination/usePagination";
import SearchBar from "@components/common/SearchBar";
import Skeleton from "@components/common/Skeleton/Skeleton";
import useResource from "@lib/hooks/common/useResource";
import navigator from "@lib/modules/navigator";
import { replaceQuery } from "@lib/modules/queryString";
import getRandomKey from "@lib/utils/getRandomKey";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import { useRouter } from "next/router";
import HospitalItem from "../HospitalItem";
import { FilterButton, FilterDiv, Section } from "./styled";

const HospitalList = () => {
  const page = usePage() - 1;
  const { data, status } = useResource({
    key: [HOSPITAL_LIST.key[0], { page }],
    fetcher: () =>
      HOSPITAL_LIST.fetcher({
        params: {
          page,
          size: 50,
        },
      }),
  });
  return (
    <Section>
      <SearchBar placeholder="원하는 위치를 검색해보세요!" />
      <header>
        <h1>강남구 역삼1동</h1>
        <button type="button">위치수정</button>
      </header>
      <HospitalList.Filter />
      <div className="Item_Wrapper">
        {status === "loading"
          ? Array(50)
              .fill("")
              .map((_, index) => (
                <Skeleton width="100%" height="200px" key={index} />
              ))
          : data?.data.hospitals.map((hospital) => (
              <HospitalItem key={hospital.id} {...hospital} />
            ))}
      </div>
      <Pagination buttonNum={5} totalPages={10} />
    </Section>
  );
};

const FILTERS = ["모든 동물", "햄스터", "토끼"];

const Filter = () => {
  const router = useRouter();
  const { filter } = router.query;
  const selectFilter = (name: string) => () => {
    const url = replaceQuery({
      router,
      key: "filter",
      query: name,
    });
    navigator({
      url,
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
