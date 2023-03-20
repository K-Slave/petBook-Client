import { hospitalRequest } from "@lib/API/petBookAPI";
import { type Key } from "@lib/hooks/common/useResource";

type Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer R
) => any
  ? R
  : never;

function getCreateQueryFn<T, P extends object>({
  createKey,
  fetcher,
}: {
  createKey: (p: P) => Key;
  fetcher: (payload: P) => Promise<T>;
}) {
  return (payload: P) => {
    return {
      key: createKey(payload),
      fetcher: () => fetcher(payload),
    };
  };
}

const hospitalKeys = {
  list: (...args: Parameters<typeof hospitalRequest.hospital_list>): Key => [
    "HOSPITAL_LIST",
    { ...args[0].params },
  ],
  detail: (
    ...args: Parameters<typeof hospitalRequest.hospital_detail>
  ): Key => ["HOSPITAL_DETAIL", args[0].pathParam],
};

// resource 한 곳에서 관리하는 방법 테스트
export const HOSPITAL_LIST = {
  name: "HOSPITAL_LIST" as const,
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

export type Resource = typeof HOSPITAL_LIST | typeof HOSPITAL_DETAIL;
