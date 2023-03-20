import { AxiosRequestHeaders } from "axios";
import RequestCore from "./RequestCore";
import { HospitalDetailResponse } from "./types/hospitalRequest";

export default class HospitalAPI extends RequestCore {
  public hospital_detail = async (payload: {
    header?: AxiosRequestHeaders;
    pathParam: string;
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      headerObj: payload.header,
      pathParam: payload.pathParam,
    });
    const result = await this.getResult<HospitalDetailResponse>({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });
    return result;
  };

  public hospital_list = async (payload: {
    header?: AxiosRequestHeaders;
    params: {
      id?: number;
      name?: string;
      address?: string;
      page: number;
      size: number;
      boundary?: string;
    };
  }) => {
    const { header, params } = payload;
    const { requestURL, requestHeaders } = this.getParameters({
      uri: "/list",
      headerObj: header,
      params: {
        ...payload.params,
        boundary: params.boundary || "",
      },
    });

    const result = await this.getResult<{
      totalCount: number;
      hospitals: Array<{
        hospitals: {
          id: number;
          name: string;
          address: string;
          latitude: number;
          longitude: number;
          n_id: number;
          modifiedAt: string;
          createdAt: string;
        };
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
      }>;
    }>({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });

    return result;
  };

  public hospital_create = async (payload: {
    header?: AxiosRequestHeaders;
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      headerObj: payload.header,
    });

    const result = await this.getResult({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
    });

    return result;
  };

  public hospital_update = async (payload: {
    header?: AxiosRequestHeaders;
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      headerObj: payload.header,
    });

    const result = await this.getResult({
      requestMethod: "PUT",
      requestURL,
      requestHeaders,
    });

    return result;
  };

  // review

  public hospital_review_create = async (
    body: {
      hospitalId: number;
      content: string;
      disease: string;
      imageIds?: number[];
      experience: string;
    },
    config?: { headerObj?: object }
  ) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: `/review`,
      headerObj: config && config.headerObj,
    });
    const result = await this.getResult({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
      body,
    });

    return result;
  };

  public hospital_review_list = async (payload?: {
    header?: AxiosRequestHeaders;
    params: {
      hospitalId: number;
      page: number;
      size: number;
    };
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: `/review/list`,
      headerObj: payload?.header,
      params: {
        ...payload?.params,
        page: Number(payload?.params.page),
        size: Number(payload?.params.size),
      },
    });
    const result = await this.getResult<{
      reviews: [
        {
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
      ];
      totalElements: number;
    }>({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });

    return result;
  };
}
