export interface HospitalInfo {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  n_id: number;
}

export type HospitalListResponse = {
  totalCount: number;
  hospitals: HospitalInfo[];
};

export interface HospitalListRequest {
  id?: number;
  name?: string;
  address?: string;
  page: number | 0;
  size: number | 50;
}

export interface HospitalReveiwRequest {
  hospitalId: number;
  content: string;
  disease: string;
  imageIds?: number[];
  experience: string;
}

// export interface HospitalCreateRequest {}
