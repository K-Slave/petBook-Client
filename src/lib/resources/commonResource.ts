import { authRequest, categoryRequest, imgRequest } from "@lib/API/petBookAPI";
import {
  authQueryKey,
  categoryQueryKey,
  imgQueryKey,
} from "@lib/globalConst/queryKey";
import { createRequest, createResource } from "@lib/hooks/common/useResource";

export const IMG_CREATE = createRequest({
  key: [imgQueryKey.create],
  requester: imgRequest.img_create,
});

export const CATEGORY_LIST = createResource({
  name: categoryQueryKey.list,
  fetcher: categoryRequest.category_list,
});

export const LOGIN_REQUEST = createRequest({
  key: [authQueryKey.login],
  requester: authRequest.login,
});

// TODO : IMG_LIST 리소스 추가
