import { AxiosRequestHeaders } from "axios";
import RequestCore from "./RequestCore";
import {
  ImgCreateRequest,
  ImgCreateResponse,
  ImgListRequest,
  ImgListResponse,
} from "./types/imgRequest";

export default class ImgAPI extends RequestCore {
  public img_create = async (payload: {
    header?: AxiosRequestHeaders;
    body: ImgCreateRequest;
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: "/upload",
      headerObj: payload.header,
    });

    const formData = new FormData();

    payload.body.fileList.forEach((elem) => {
      formData.append("file", elem);
    });

    // formData.append("comment", "테스트용 이미지");
    // formData.append("content_id", "1111");

    const result = await this.getResult<ImgCreateResponse, FormData>({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
      body: formData,
    });

    return result;
  };

  public img_list = async (payload: {
    header?: AxiosRequestHeaders;
    params: ImgListRequest;
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: "/find-by-ids",
      headerObj: payload.header,
      params: payload.params,
    });

    const result = await this.getResult<ImgListResponse, ImgListRequest>({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });

    return result;
  };
}
