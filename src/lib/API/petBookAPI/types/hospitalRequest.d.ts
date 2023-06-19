import { GetResultReturn } from "../RequestCore";

// hospital_detail

export type HospitalDetailPayload = {
  header?: AxiosRequestHeaders;
  pathParam: string;
};

export type HospitalDetailResult = GetResultReturn<
  HospitalDetailResponse,
  HospitalDetailRequest
>;

export interface HospitalInfo {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  n_id: number;
  modifiedAt: string;
  createdAt: string;
}

export interface HospitalDetailRequest {
  pathParam: string;
}
export interface HospitalDetailResponse extends CommonRequestResult {
  result: HospitalInfo;
}

// hospital_list

export type HospitalListPayload = {
  header?: AxiosRequestHeaders;
  params: HospitalListRequest;
};

export type HospitalListResult = GetResultReturn<
  HospitalListResponse,
  HospitalListRequest
>;

export interface HospitalFullInfo {
  hospitals: HospitalInfo;
  bestReview: {
    bestContent: string;
    bestId: number;
    bestListCount: number;
    bestExperience: string;
  };
  worstReview: {
    worstContent: string;
    worstId: number;
    worstLikeCount: number;
    worstExperience: string;
  };
}

export interface HospitalListRequest {
  id?: number;
  name?: string;
  address?: string;
  page: number;
  size: number;
  boundary?: string;
}

export interface HospitalListResponse extends CommonRequestResult {
  result: {
    totalCount: number;
    hospitals: HospitalFullInfo[];
  };
}

// export interface HospitalReviewRequest {
//   id: number;
//   hospital: {
//     id: number;
//     name: string;
//   };
//   user: {
//     id: number;
//     nickname: string;
//   };
//   disease: string;
//   content: string;
//   createdAt: string;
//   images: [
//     {
//       id: number;
//       imageUrl: string;
//     }
//   ];
//   isLike: boolean;
//   likeCount: number;
//   experience: string;
// }

// hospital_review_list

export type HospitalReviewListPayload = {
  header?: AxiosRequestHeaders;
  params: HospitalReviewListRequest;
};

export type HospitalReviewListResult = GetResultReturn<
  HospitalReviewListResponse,
  HospitalReviewListRequest
>;

export interface HospitalReview {
  id: number;
  hospital: {
    id: number;
    name: string;
  };
  user: {
    id: number;
    nickname: string;
  };
  disease: string;
  content: string;
  createdAt: string;
  images: [
    {
      id: number;
      imageUrl: string;
    }
  ];
  isLike: boolean;
  likeCount: number;
  experience: string;
}

export interface HospitalReviewListRequest {
  hospitalId: number;
  page: number;
  size: number;
}

export interface HospitalReviewListResponse extends CommonRequestResult {
  result: {
    reviews: HospitalReview[];
    totalElements: number;
  };
}

// TODO: 응답 타입 없음
// hospital_review_create
export interface HospitalReviewCreateRequest {
  hospitalId: number;
  content: string;
  disease: string;
  imageIds?: number[];
  experience: string;
}

// TODO: 응답 타입 없음
// hospital_review_remove

export interface HospitalReveiwImgProps {
  idx: number;
  src: string | ArrayBuffer | null | undefined | any;
}

export interface ReviewProps {
  closeModal: () => void;
  hospitalId: number;
  hospitalName?: string;
}

interface ReviewBoxProps {
  hospitalId: number;
  reviewIndex: number;
  removeBox: () => void;
}

// export interface HospitalCreateRequest {}
