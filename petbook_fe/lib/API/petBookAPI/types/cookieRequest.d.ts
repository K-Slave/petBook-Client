export interface LocationCacheData {
  region_type: string;
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  region_4depth_name: string;
  code: string;
  x: number;
  y: number;
  latitude: number;
  longitude: number;
  petBookRegionName: string;
  boundary?: string;
}

interface PetBookCookies {
  key: string;
  value: any;
}

export interface GetCookieRequest {
  key: string;
}

export type GetCookieResponse = PetBookCookies;

export type SetCookieRequest = PetBookCookies;

export type SetCookieResponse = PetBookCookies;

export interface RemoveCookieRequest {
  key: string;
}

export interface RemoveCookieResponse {
  success: boolean;
}
