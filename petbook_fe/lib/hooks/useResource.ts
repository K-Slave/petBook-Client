import { useMutation, useQuery } from "react-query";

/**
 * @function useResource : GET 요청 결과를 받아오는 useQuery 를 내포한 Hook
 * @param resource Page Component 에서 명시한 createResource 의 형식과 같습니다.
 * @param resource.key 클라이언트에서 새로운 API 요청을 할때 queryClient 내의 map 객체에 캐싱될 key 값
 * @param resource.params GET 요청 할때 붙일 쿼리 파라미터
 * @param resource.config 헤더에 담을 객체등 옵션으로 호출시 필요한 인자.
 * @returns useQuery 의 state 를 그대로 반환합니다.
 */
export default function useResource<T, P, C>(resource: {
  key: string;
  fetcher: (params: P, config?: C) => Promise<T>;
  params: P;
  config?: C;
}) {
  const paramFetcher = () =>
    resource.fetcher(resource.params, resource?.config);

  return useQuery(resource.key, paramFetcher);
}

/**
 * @function createResource : 최초 진입시 GET 해올 리소스
 * @param resource 기본적으로 Next JS 서버에서 쿼리 파라미터를 취득해 fetcher 에 파라미터로 담아 호출됩니다.
 * @param resource.key queryClient 내의 map 객체에 캐싱될 key 값
 * @param resource.fetcher 사용할 API 호출 함수
 * @param resource.params 페이지 첫 진입시 API 호출 함수에 담을 인자.
 * @param resource.config 헤더에 담을 객체등 옵션으로 호출시 필요한 인자.
 * @returns resource 를 담은 객체
 */
export function createResource<T, P, C>(resource: {
  key: string;
  fetcher: (param: P, config?: C) => Promise<T>;
  params?: P;
  config?: C;
}) {
  return resource;
}

export function useSetResource<T, P>(request: {
  key: string;
  requester: (reqBody: P) => Promise<T>;
}) {
  const queryState = useMutation(request.key, request.requester);

  return queryState;
}

export function createRequest<T, P>(request: {
  key: string;
  requester: (reqBody: P) => Promise<T>;
}) {
  return { key: request.key, requester: request.requester };
}
