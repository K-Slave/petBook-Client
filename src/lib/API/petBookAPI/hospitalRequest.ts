import { AxiosRequestHeaders } from "axios";
import RequestCore from "./RequestCore";
import {
  HospitalDetailPayload,
  HospitalDetailRequest,
  HospitalDetailResponse,
  HospitalListPayload,
  HospitalListRequest,
  HospitalListResponse,
  HospitalReviewCreateRequest,
  HospitalReviewListPayload,
  HospitalReviewListResponse,
  HospitalReviewListRequest,
} from "./types/hospitalRequest";

export default class HospitalAPI extends RequestCore {
  public hospital_detail = async (payload: {
    header?: AxiosRequestHeaders;
    pathParam: string;
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      headerObj: payload.header,
      pathParam: payload.pathParam ? payload.pathParam : "0",
    });
    const result = await this.getResult<
      HospitalDetailResponse,
      HospitalDetailPayload
    >({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });
    return result;
  };

  public hospital_list = async (payload: {
    header?: AxiosRequestHeaders;
    params: HospitalListRequest;
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: "/list",
      headerObj: payload.header,
      params: payload.params,
    });

    const result = await this.getResult<
      HospitalListResponse,
      HospitalListPayload
    >({
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

  public hospital_review_list = async (payload: {
    header?: AxiosRequestHeaders;
    params: HospitalReviewListRequest;
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: `/review/list`,
      headerObj: payload.header,
      params: {
        ...payload.params,
        page: Number(payload.params.page),
        size: Number(payload.params.size),
      },
    });
    const result = await this.getResult<
      HospitalReviewListResponse,
      HospitalReviewListPayload
    >({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });

    return result;
  };

  public hospital_review_create = async (
    body: HospitalReviewCreateRequest[],
    config?: { headerObj?: object }
  ) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: `/review`,
      headerObj: config && config.headerObj,
    });

    // TODO: 응답 타입 없음
    const result = await this.getResult({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
      body,
    });

    return result;
  };

  // TODO: 응답 타입 없음
  public hospital_review_remove = async (payload: {
    headerObj?: object;
    pathParam: string;
  }) => {
    const { pathParam, headerObj } = payload;
    const { requestURL, requestHeaders } = this.getParameters({
      pathParam,
      headerObj,
    });
    const result = await this.getResult({
      requestMethod: "DELETE",
      requestURL,
      requestHeaders,
    });

    return result;
  };
}
