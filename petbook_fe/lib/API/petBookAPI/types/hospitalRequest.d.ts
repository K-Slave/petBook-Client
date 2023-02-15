export interface HospitalItem {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  n_id: number;
}

export type HospitalListResponse = {
  totalCount: number;
  hospitals: HospitalItem[];
};

export interface HospitalListRequest {
  id?: number;
  name?: string;
  address?: string;
  page: number | 0;
  size: number | 50;
}

// export interface HospitalCreateRequest {}
