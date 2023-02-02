import { AxiosRequestHeaders } from "axios";
import RequestCore from "./RequestCore";
import { HospitalListResponse } from "./types/hospitalRequest";

export default class HospitalAPI extends RequestCore {
  public hospital_list = async (payload?: {
    header?: AxiosRequestHeaders;
    params?: any;
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      headerObj: payload?.header,
    });

    const result = await this.getResult<HospitalListResponse>({
      requestMethod: "GET",
      requestURL: requestURL + "s",
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
}
