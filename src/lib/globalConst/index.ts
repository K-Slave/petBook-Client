import { getDayToSeconds, getMinToMs } from "@lib/utils/getTimes";
import { QueryObserverOptions } from "@tanstack/react-query";

export const cacheLifeTime = getMinToMs(5);

export const queryClientOptions: QueryObserverOptions = {
  staleTime: cacheLifeTime,
  cacheTime: cacheLifeTime,
  // refetchInterval: cacheLifeTime,
  refetchOnMount: false,
  refetchOnReconnect: false,
  refetchIntervalInBackground: false,
  refetchOnWindowFocus: false,
  refetchInterval: false,
  retry: 2,
};

export const requiredResourcesKeyName = {
  list: "requiredResources" as const,
};

export const cookieOptions = {
  oneDay: getDayToSeconds(1),
  oneMonth: getDayToSeconds(30),
  loginMaxAge: getDayToSeconds(15),
};

export const cookieKeyName = {
  userToken: "PETBOOK_USER",
  userInfo: "USER_INFO",
  owner: "OWNER",
  isOwnerCheck: "IS_OWNER_CHECK",
  location: "USER_LOCATION_DATA",
};

export const commonReg = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=(.*[a-zA-Z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,}).{8,}$/,
};

export const STORAGE_PATH =
  process.env.NEXT_PUBLIC_STORAGE ||
  "https://objectstorage.ap-seoul-1.oraclecloud.com/n/cnkpahvshifr/b/petbook-image/o/assets";
