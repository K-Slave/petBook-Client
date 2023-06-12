import rectBoundsState from "@atoms/pageAtoms/hospitalmap/rectBounds";
import Pagination from "@/stories/common/Pagination";
import usePage from "@lib/hooks/common/usePage";
import SearchBar from "@/stories/common/Input/SearchBar";
import Skeleton from "@/stories/common/Skeleton";
import useDidMountEffect from "@lib/hooks/common/useDidMountEffect";
import { useResource } from "@lib/hooks/common/useResource";
import { getScrollPosition } from "@lib/modules/localStorage";
import navigator from "@lib/modules/navigator";
import { removeQuery, replaceQuery } from "@lib/modules/queryString";
import { convRectBoundsToBoundary } from "@lib/utils/kakaoMaps/getRectBounds";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import CurrentGps from "../CurrentGps";
import HospitalItem from "../HospitalItem";
import { FilterButton, FilterDiv, Section } from "./styled";
import hospitalOptions from "@lib/globalConst/hospitalOptions";
import { HOSPITAL_LIST } from "@lib/resources/hospitalResource";
import localConsole from "@lib/utils/localConsole";

const HospitalList = () => {
  const ref = useRef<HTMLElement | null>(null);
  const page = usePage() - 1;
  const size = hospitalOptions.size;
  const rectBounds = useRecoilValue(rectBoundsState);
  const boundary = convRectBoundsToBoundary(rectBounds);
  const payload = {
    params: {
      page,
      size,
      boundary,
    },
  };
  const { data } = useResource({
    resource: HOSPITAL_LIST,
    payload,
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

  localConsole?.log(data, "testdata");

  // page updated
  useDidMountEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        top: 0,
      });
    }
  }, [page, data]);
  return (
    <Section ref={ref}>
      <SearchBar
        placeholder="원하는 위치를 검색해보세요!"
        target="hospital"
        width="100%"
      />
      <CurrentGps />
      <HospitalList.Filter />
      <div className="Item_Wrapper">
        {!data ? (
          <Skeleton width="100%" height="200px" copy={20} />
        ) : (
          data.response.data.result.hospitals.map((hospital) => (
            <HospitalItem
              key={hospital.hospitals.id}
              parent={ref}
              hospitals={hospital}
            />
          ))
        )}
      </div>
      {data && (
        <Pagination
          buttonNum={5}
          totalPages={Math.ceil(
            data.response.data.result.totalCount / hospitalOptions.size
          )}
        />
      )}
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
