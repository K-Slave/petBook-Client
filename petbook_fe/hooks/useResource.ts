import { useMutation, useQuery, useQueryClient } from "react-query";
import localConsole from "../lib/localConsole";
// import { FetchResponseToJS } from "../pages/api/fetch/fetchCore";

export default function useResource<T>(resource: {
  key: string;
  fetcher: () => Promise<T>;
}) {
  const queryState = useQuery(resource.key, resource.fetcher);

  return queryState;
}

export function createResource<T>(resource: {
  key: string;
  fetcher: () => Promise<T>;
}) {
  return { key: resource.key, fetcher: resource.fetcher };
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
