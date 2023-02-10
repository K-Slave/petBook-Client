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

interface Item {
  target: "hospital" | "community";
  type: "query" | "location";
  timezone: string;
  time: string;
  value: string;
}

const RECENT_SEARCH_KEY = "RECENT_SEARCH";
export const addSearchValue = (
  params: Pick<Item, "target" | "type" | "value">
) => {
  const timezone = "Asia/Seoul";
  const time = dayjs().tz(timezone).format("YYYY-MM-DD HH:mm:ss.SSS");
  const item = {
    ...params,
    timezone,
    time,
  };
  const list = getLocalStorage<Item[]>(RECENT_SEARCH_KEY);
  if (list === null) {
    setLocalStorage<Item[]>({
      key: RECENT_SEARCH_KEY,
      value: [item],
    });
  } else {
    const idx = list.findIndex(
      (item) =>
        item.value === params.value &&
        item.target === params.target &&
        item.type === params.type
    );
    if (idx !== -1) {
      list[idx] = item;
    } else {
      list.push(item);
    }
    setLocalStorage<Item[]>({
      key: RECENT_SEARCH_KEY,
      value: list,
    });
  }
};

export const getRecentSearchList = (target: Item["target"]) => {
  const list = getLocalStorage<Item[]>(RECENT_SEARCH_KEY);
  return list ? list.filter((item) => item.target === target) : null;
};
