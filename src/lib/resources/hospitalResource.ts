import { hospitalRequest, imgRequest } from "@lib/API/petBookAPI";
import { hospitalQueryKey } from "@lib/globalConst/queryKey";
import { createRequest, createResource } from "@lib/hooks/common/useResource";

export const HOSPITAL_LIST = createResource({
  name: hospitalQueryKey.list,
  fetcher: hospitalRequest.hospital_list,
});

export const HOSPITAL_DETAIL = createResource({
  name: hospitalQueryKey.detail,
  fetcher: hospitalRequest.hospital_detail,
});

export const HOSPITAL_REVIEW_LIST = createResource({
  name: hospitalQueryKey.reviewList,
  fetcher: hospitalRequest.hospital_review_list,
});

export const HOSPITAL_REVIEW_CREATE = createRequest({
  key: ["HOSPITAL_REVIEW_CREATE"],
  requester: hospitalRequest.hospital_review_create,
});

export const HOSPITAL_REVIEW_REMOVE = createRequest({
  key: ["HOSPITAL_REVIEW_REMOVE"],
  requester: hospitalRequest.hospital_review_remove,
});

export const IMG_CREATE = createRequest({
  key: ["IMG_CREATE"],
  requester: imgRequest.img_create,
});
