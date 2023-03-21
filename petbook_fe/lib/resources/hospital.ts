import { hospitalRequest } from "@lib/API/petBookAPI";
import type { Key } from "@lib/hooks/common/useResource";
import { getCreateQueryFn, type Parameters } from ".";

// 각 resource들의 query key 관리
const hospitalKeys = {
  list: (...args: Parameters<typeof hospitalRequest.hospital_list>): Key => [
    "HOSPITAL_LIST",
    { ...args[0].params },
  ],
  detail: (
    ...args: Parameters<typeof hospitalRequest.hospital_detail>
  ): Key => ["HOSPITAL_DETAIL", args[0].pathParam],
};

// resource들을 한 곳에서 관리하는 방법 테스트
/*
WHY??
- 페이지마다 중복되서 사용하는 resource 존재 => 중복 제거
- resource가 늘어날수록 (즉, API 개수가 늘어날수록) 한 곳에서 관리하는 것이 유지보수가 편하지 않을까 생각
- queryParser 함수에서 각 resource에 대해 엄격한 타입 사용 가능
*/
export const HOSPITAL_LIST = {
  // name: resource 이름 (queryParser 함수에서 분기점으로 사용)
  name: "HOSPITAL_LIST" as const,
  // createQuery: resource의 query 키와 fetcher 함수를 지닌 객체를 반환하는 함수, 이 함수의 파라미터로 payload를 전달하면 됨
  createQuery: getCreateQueryFn({
    createKey: hospitalKeys.list,
    fetcher: hospitalRequest.hospital_list,
  }),
};
export const HOSPITAL_DETAIL = {
  name: "HOSPITAL_DETAIL" as const,
  createQuery: getCreateQueryFn({
    createKey: hospitalKeys.detail,
    fetcher: hospitalRequest.hospital_detail,
  }),
};
