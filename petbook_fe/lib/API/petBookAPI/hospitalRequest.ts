import { AxiosRequestHeaders } from "axios";
import RequestCore from "./RequestCore";

export default class HospitalAPI extends RequestCore {
  public hospital_list = async (payload?: {
    header?: AxiosRequestHeaders;
    params?: {
      id?: number;
      name?: string;
      address?: string;
      page: number;
      size: number;
    };
  }) => {
    const pageParam =
      payload && payload.params && typeof payload.params.page === "number"
        ? payload.params.page
        : 0;

    const sizeParams =
      payload && payload.params && typeof payload.params.size === "number"
        ? payload.params.size
        : 50;

    const { requestURL, requestHeaders } = this.getParameters({
      uri: "s",
      headerObj: payload?.header,
      params: {
        ...payload?.params,
        page: pageParam,
        size: sizeParams,
      },
    });

    const result = await this.getResult<{
      totalCount: number;
      hospitals: {
        id: number;
        name: string;
        address: string;
        latitude: number;
        longitude: number;
        n_id: number;
      }[];
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
}
