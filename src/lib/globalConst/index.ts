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
  maxAge: getDayToSeconds(30),
};

export const cookieKeyName = {
  userToken: "PETBOOK_USER",
  userInfo: "USER_INFO",
  location: "USER_LOCATION_DATA",
};
