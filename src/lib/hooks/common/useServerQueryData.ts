import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { Resource, ResourceParams, ResourceResult } from "@lib/resources";

const useServerQueryData = <P = ResourceParams, T = ResourceResult>(
  resource: Resource<P, T>,
  isClientFetch?: boolean
) => {
  const queryClient = useQueryClient();
  const clientHydrated = useRef(false);

  useEffect(() => {
    clientHydrated.current = true;
  }, []);

  if (isClientFetch) return { serverData: null, clientHydrated };

  let serverData: Resource<P, T> | undefined;

  if (resource.isList) {
    if (typeof resource.idx === "undefined")
      return { serverData, clientHydrated };

    const pureServerQueries = queryClient.getQueriesData<Resource<P, T>>([
      resource.name,
    ]);

    const serverQueryKey = pureServerQueries[resource.idx][0];

    if (serverQueryKey && !resource.key) {
      resource.key = serverQueryKey;
    }

    if (serverQueryKey[1]) {
      resource.params = serverQueryKey[1] as typeof resource.params;
    }

    serverData = resource;

    return { serverData, clientHydrated };
  }

  const pureServerQueries = queryClient.getQueriesData<Resource<P, T>>([
    resource.name,
  ]);

  const serverQueryKey = pureServerQueries[0][0];

  if (serverQueryKey && !resource.key) {
    resource.key = serverQueryKey;
  }

  if (serverQueryKey[1]) {
    resource.params = serverQueryKey[1] as typeof resource.params;
  }

  serverData = resource;

  return { serverData, clientHydrated };
};

export default useServerQueryData;
