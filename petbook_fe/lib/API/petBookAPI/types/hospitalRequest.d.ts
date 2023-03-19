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

export type HospitalListResponse = {
  totalCount: number;
  hospitals: HospitalFullInfo[];
};

export interface HospitalListRequest {
  id?: number;
  name?: string;
  address?: string;
  page: number | 0;
  size: number | 50;
  boundary?: string;
}

export interface HospitalReveiwRequest {
  hospitalId: number;
  content: string;
  disease: string;
  imageIds?: number[];
  experience: string;
}

// export interface HospitalCreateRequest {}
