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

  return {
    searchText,
    handleQuerySearch,
  };
}

export const useClearQuerySearch = () => {
  const router = useRouter();
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
    handleClearQuery,
  };
};

export const useRecentSearchKeywordList = (
  domain: SearchKeywordItem["domain"]
) => {
  const list = getSearchKeywordList(domain)
    .map((item, index) => ({ ...item, id: index + 1 }))
    .sort(({ time: timeA, timezone: tzA }, { time: timeB, timezone: tzB }) => {
      const dateA = dayjs(timeA).tz(tzA);
      const dateB = dayjs(timeB).tz(tzB);
      return dateB.diff(dateA);
    });
  return { list };
};
