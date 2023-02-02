export interface HospitalList {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

export type HospitalListResponse = HospitalList[];

// export interface HospitalCreateRequest {}
