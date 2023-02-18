// GET ImgList
export interface ImgListRequest {
  ids: number[];
}

interface ImgListResponseItem {
  id: number;
  imageUrl: string;
}

export type ImgListResponse = ImgListResponseItem[];

// POST ImgCreate
export interface ImgCreateRequest {
  fileList: File[];
}

interface ImgCreateResponseItem {
  imgUrl: string;
  createdAt: string;
  modifiedAt: string;
  id: number;
}

export type ImgCreateResponse = ImgCreateResponseItem[];
