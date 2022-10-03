import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import localConsole from "../lib/localConsole";
// import { FetchResponseToJS } from "../pages/api/fetch/fetchCore";

export default function useResource<T, P>(
  resource: {
    key: string;
    fetcher: (param: P) => Promise<T>;
  },
  params: P
) {
  const paramFetcher = () => resource.fetcher(params);
  const queryState = useQuery(resource.key, paramFetcher);

  return queryState;
}

export function createResource<T, P>(
  resource: {
    key: string;
    fetcher: (param: P) => Promise<T>;
  },
  params: P
) {
  return {
    key: resource.key,
    fetcher: resource.fetcher,
    params: params,
  };
}

export function useSetResource<T>(resource: {
  key: string;
  requester: () => Promise<T>;
}) {
  const queryState = useMutation(resource.key, resource.requester);

  return queryState;
}

export function createRequest<T, P>(request: {
  key: string;
  requester(reqBody: P): () => Promise<T>;
}) {
  return { key: request.key, requester: request.requester };
}
