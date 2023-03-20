import rectBoundsState from "@atoms/pageAtoms/hospitalmap/rectBounds";
import Pagination from "@components/common/Pagination";
import { usePage } from "@components/common/Pagination/usePagination";
import SearchBar from "@components/common/SearchBar";
import Skeleton from "@components/common/Skeleton/Skeleton";
import hospitalOptions from "@lib/commonValue/hospitalOptions";
import useDidMountEffect from "@lib/hooks/common/useDidMountEffect";
import useResource from "@lib/hooks/common/useResource";
import { getScrollPosition } from "@lib/modules/localStorage";
import navigator from "@lib/modules/navigator";
import { removeQuery, replaceQuery } from "@lib/modules/queryString";
import { convRectBoundsToBoundary } from "@lib/utils/kakaoMaps/getRectBounds";
import localConsole from "@lib/utils/localConsole";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import CurrentGps from "../CurrentGps";
import HospitalItem from "../HospitalItem";
import { FilterButton, FilterDiv, Section } from "./styled";

const HospitalList = () => {
  const ref = useRef<HTMLElement | null>(null);
  const page = usePage() - 1;
  const rectBounds = useRecoilValue(rectBoundsState);
  const boundary = convRectBoundsToBoundary(rectBounds);

  const fetchParams = {
    page,
    size: 50,
    boundary,
  };

  localConsole?.log(fetchParams, "fetchParams");

  const { data, status } = useResource({
    key: [HOSPITAL_LIST.key[0], fetchParams],
    fetcher: () =>
      HOSPITAL_LIST.fetcher({
        params: fetchParams,
      }),
  });

  // mounted
  useEffect(() => {
    const yPos = getScrollPosition();
    if (!ref.current) return;
    if (yPos === null) {
      ref.current.scrollTo({
        top: 0,
      });
    } else {
      ref.current.scrollTo({
        top: yPos,
      });
    }
  }, []);

  // page updated
  useDidMountEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        top: 0,
      });
    }
  }, [page]);
  return (
    <Section ref={ref}>
      <SearchBar placeholder="원하는 위치를 검색해보세요!" />
      <CurrentGps />
      <HospitalList.Filter />
      <div className="Item_Wrapper">
        {status === "loading"
          ? Array(20)
              .fill("")
              .map((_, index) => (
                <Skeleton width="100%" height="200px" key={index} />
              ))
          : data?.data.hospitals.map((hospital) => (
              <HospitalItem
                key={hospital.hospitals.id}
                {...hospital}
                {...ref}
              />
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
    const url =
      name === FILTERS[0]
        ? removeQuery({
            asPath: router.asPath,
            key: "filter",
          })
        : replaceQuery({
            asPath: router.asPath,
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
