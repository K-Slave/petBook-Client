import { GetResultReturn } from "@lib/API/petBookAPI/RequestCore";
import {
  ArticleDetailPayload,
  ArticleDetailResponse,
  ArticleListPayload,
  ArticleListRequest,
  ArticleListResponse,
  ArticleSearchPayload,
  ArticleSearchRequest,
} from "@lib/API/petBookAPI/types/articleRequest";
import {
  CategoryListPayload,
  CategoryListResponse,
} from "@lib/API/petBookAPI/types/categoryRequest";
import {
  CommentListPayload,
  CommentListResponse,
} from "@lib/API/petBookAPI/types/commentRequest";
import {
  HospitalDetailResponse,
  HospitalListResponse,
  HospitalReviewListResponse,
  HospitalListPayload,
  HospitalDetailPayload,
  HospitalReviewListPayload,
} from "@lib/API/petBookAPI/types/hospitalRequest";
import {
  ImgListRequest,
  ImgListResponse,
} from "@lib/API/petBookAPI/types/imgRequest";
import { QueryKeyList, createKey } from "@lib/queries";
import { QueryKey } from "@tanstack/react-query";

// TODO : 모든 리소스에 대한 파라미터 정의
export interface Resource<P = ResourceParams, T = ResourceResult> {
  name: QueryKeyList;
  key?: QueryKey;
  params?: P;
  fetcher: (params: P) => Promise<GetResultReturn<T, P>>;
  createKey: typeof createKey;
}

export type ResourceParams =
  | HospitalDetailPayload
  | HospitalListPayload
  | HospitalReviewListPayload
  | ImgListRequest
  | CommentListPayload
  | CategoryListPayload
  | ArticleListPayload
  | ArticleDetailPayload
  | ArticleSearchPayload
  | ArticleSearchRequest;

export type ResourceResult =
  | HospitalDetailResponse
  | HospitalListResponse
  | HospitalReviewListResponse
  | ImgListResponse
  | CommentListResponse
  | CategoryListResponse
  | ArticleListResponse
  | ArticleDetailResponse
  | ArticleListResponse;
