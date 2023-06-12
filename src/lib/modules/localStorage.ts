import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const setLocalStorage = <T>({
  key,
  value,
}: {
  key: string;
  value: T;
}) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <T>(key: string) => {
  const value = localStorage.getItem(key);
  return value ? (JSON.parse(value) as T) : null;
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export interface SearchKeywordItem {
  target: "hospital" | "community";
  type: "query" | "location";
  timezone: string;
  time: string;
  value: string;
}

const RECENT_SEARCH_KEY = "RECENT_SEARCH";
export const addSearchKeyword = (
  params: Pick<SearchKeywordItem, "target" | "type" | "value">
) => {
  const tz = "Asia/Seoul";
  const time = dayjs().tz(tz).format("YYYY-MM-DD HH:mm:ss.SSS");
  const data = {
    ...params,
    timezone: tz,
    time,
  };
  const list = getLocalStorage<SearchKeywordItem[]>(RECENT_SEARCH_KEY);
  if (list === null) {
    setLocalStorage<SearchKeywordItem[]>({
      key: RECENT_SEARCH_KEY,
      value: [data],
    });
  } else {
    const idx = list.findIndex(
      (item) =>
        item.value === params.value &&
        item.target === params.target &&
        item.type === params.type
    );
    if (idx !== -1) {
      list[idx] = data;
    } else {
      list.push(data);
    }
    setLocalStorage<SearchKeywordItem[]>({
      key: RECENT_SEARCH_KEY,
      value: list,
    });
  }
};
export const getSearchKeywordList = (target: SearchKeywordItem["target"]) => {
  const list = getLocalStorage<SearchKeywordItem[]>(RECENT_SEARCH_KEY);
  return list ? list.filter((item) => item.target === target) : [];
};

const SCROLL_POS = "SCROLL_POS";
export const saveScrollPosition = (yPos: number) => {
  setLocalStorage({
    key: SCROLL_POS,
    value: yPos,
  });
};
export const getScrollPosition = () => getLocalStorage<number>(SCROLL_POS);
export const removeScrollPosition = () => removeLocalStorage(SCROLL_POS);
