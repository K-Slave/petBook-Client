import { AxiosRequestHeaders } from "axios";
import RequestCore from "./RequestCore";

export default class ImgAPI extends RequestCore {
  public img_create = async (payload: {
    header?: AxiosRequestHeaders;
    body: {
      fileList: File[];
    };
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

    const result = await this.getResult<
      {
        imgUrl: string;
        createdAt: string;
        modifiedAt: string;
        id: number;
      }[],
      FormData
    >({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
      body: formData,
    });

    return result;
  };

  public img_list = async (payload: {
    header?: AxiosRequestHeaders;
    params: {
      ids: number[];
    };
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: "/find-by-ids",
      headerObj: payload.header,
      params: payload.params,
    });

    const result = await this.getResult<
      {
        id: number;
        imageUrl: string;
      }[]
    >({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });

    return result;
  };
}
