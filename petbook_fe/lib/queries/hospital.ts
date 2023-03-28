import { hospitalRequest } from "@lib/API/petBookAPI";
import type { Key } from "@lib/hooks/common/useResource";
import type { Parameters } from ".";

// 각 resource들의 query key 관리
const hospitalKeys = {
  list: (...args: Parameters<typeof hospitalRequest.hospital_list>): Key => [
    "HOSPITAL_LIST",
    args[0].params,
  ],
  detail: (
    ...args: Parameters<typeof hospitalRequest.hospital_detail>
  ): Key => ["HOSPITAL_DETAIL", args[0].pathParam],
  reviewList: (
    ...args: Parameters<typeof hospitalRequest.hospital_review_list>
  ): Key => ["HOSPITAL_REVIEW_LIST", args[0].params],
};

// resource들을 한 곳에서 관리하는 방법 테스트
/*
WHY??
- 페이지마다 중복되서 사용하는 resource 존재 => 중복 제거
- resource가 늘어날수록 (즉, API 개수가 늘어날수록) 한 곳에서 관리하는 것이 유지보수가 편하지 않을까 생각
- queryParser 함수에서 각 resource에 대해 엄격한 타입 사용 가능
*/
export const HOSPITAL_LIST = {
  name: "HOSPITAL_LIST" as const, // name: resource 이름 (queryParser 함수에서 분기점으로 사용)
  createKey: hospitalKeys.list, // query key 생성하는 함수
  fetcher: hospitalRequest.hospital_list, // query fetch 함수
};
export const HOSPITAL_DETAIL = {
  name: "HOSPITAL_DETAIL" as const,
  createKey: hospitalKeys.detail,
  fetcher: hospitalRequest.hospital_detail,
};
export const HOSPITAL_REVIEW_LIST = {
  name: "HOSPITAL_REVIEW_LIST" as const,
  createKey: hospitalKeys.reviewList,
  fetcher: hospitalRequest.hospital_review_list,
};
