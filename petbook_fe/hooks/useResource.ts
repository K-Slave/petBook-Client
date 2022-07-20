import { useQuery, useQueryClient } from "react-query";
import localConsole from "../lib/localConsole";

export default function useResource(resource: {
  key: string;
  fetcher: () => Promise<Response>;
}) {
  const queryState = useQuery(resource.key, resource.fetcher);

  return queryState;
}

export function createResource(resource: {
  key: string;
  fetcher: () => Promise<Response>;
}) {
  return { key: resource.key, fetcher: resource.fetcher };
}
