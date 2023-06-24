import {
  SearchKeywordItem,
  addSearchKeyword,
  getSearchKeywordList,
} from "@lib/modules/localStorage";
import { removeQuery, replaceQuery } from "@lib/modules/queryString";
import navigator from "@lib/modules/navigator";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
const QUERY_KEY = "query";

export default function useQuerySearch(domain: SearchKeywordItem["domain"]) {
  const router = useRouter();
  const { query } = router.query;
  const searchText = query === undefined ? "" : (query as string);
  const handleQuerySearch = (value: string) => {
    const url = replaceQuery({
      fullPath: router.asPath,
      key: QUERY_KEY,
      query: value,
      basePath: domain === "community" ? "/community/list" : undefined,
    });
    addSearchKeyword({ domain, type: "query", value });
    navigator({
      url,
      options: {
        shallow: true,
      },
    });
  };
  const handleClearQuery = () => {
    const url = removeQuery({ fullPath: router.asPath, key: QUERY_KEY });
    navigator({
      url,
      options: {
        shallow: true,
      },
    });
  };
  return {
    searchText,
    handleQuerySearch,
    handleClearQuery,
  };
}

export const useRecentSearchKeyword = (domain: SearchKeywordItem["domain"]) => {
  const router = useRouter();
  const list = getSearchKeywordList(domain).sort(
    ({ time: timeA, timezone: tzA }, { time: timeB, timezone: tzB }) => {
      const dateA = dayjs(timeA).tz(tzA);
      const dateB = dayjs(timeB).tz(tzB);
      return dateB.diff(dateA);
    }
  );
  const onClickSearch = (keyword: string) => () => {
    const url = replaceQuery({
      fullPath: router.asPath,
      key: QUERY_KEY,
      query: keyword,
      basePath: domain === "community" ? "/community/list" : undefined,
    });
    addSearchKeyword({ domain, type: "query", value: keyword });
    navigator({
      url,
      options: {
        shallow: true,
      },
    });
  };
  return { list, onClickSearch };
};
