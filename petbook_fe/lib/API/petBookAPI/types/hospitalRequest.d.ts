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
