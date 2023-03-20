import { ParsedUrlQuery } from "querystring";
import { QueryClient } from "@tanstack/react-query";
import type { Key } from "@lib/hooks/common/useResource";
import { UserLocationData } from "@lib/types/CacheData";
import cleanObject from "@lib/utils/cleanObject";
import { NextPageContext } from "next";
import cookies from "next-cookies";
import { HospitalListRequest } from "@lib/API/petBookAPI/types/hospitalRequest";
import hospitalOptions from "@lib/commonValue/hospitalOptions";
import keyName from "@lib/commonValue/keyName";
import localConsole from "@lib/utils/localConsole";

export default async function queryParser(
  ctx: NextPageContext,
  resource: {
    key: Key;
    fetcher: (params?: any, config?: any) => void;
  },
  queryParams: ParsedUrlQuery,
  client: QueryClient
) {
  switch (resource.key[0]) {
    case "COMMENT_LIST": {
      await client.prefetchInfiniteQuery(resource.key, () =>
        resource.fetcher()
      );
      break;
    }

    case "CATEGORY_LIST": {
      if (typeof window === "undefined") {
        await client.fetchQuery([...resource.key], () => resource.fetcher());
      }
      break;
    }

    case "HOSPITAL_LIST": {
      const cachedData = cookies(ctx)[keyName.location] as
        | UserLocationData
        | undefined;

      const page = queryParams.page
        ? Number(queryParams.page) - 1
        : hospitalOptions.page;

      let fetchParams: HospitalListRequest = {
        page,
        size: hospitalOptions.size,
        boundary: hospitalOptions.boundary,
      };

      let fetchKey: string[] = [...resource.key, { page }];

      if (queryParams.id || typeof queryParams.id !== "undefined") {
        fetchParams.id = Number(queryParams.id);
        fetchParams.boundary = "";
      }

      if (!queryParams.id) {
        fetchParams.id = undefined;
        fetchParams.boundary =
          cachedData && cachedData.boundary
            ? cachedData.boundary
            : fetchParams.boundary;
      }

      fetchParams = cleanObject(fetchParams);
      fetchKey = [...resource.key, fetchParams];

      localConsole?.log(fetchParams, "fetchParams");

      await client.fetchQuery(fetchKey, () =>
        resource.fetcher({
          params: fetchParams,
        })
      );
      break;
    }

    default: {
      await client.fetchQuery(resource.key, resource.fetcher);
    }
  }
}
