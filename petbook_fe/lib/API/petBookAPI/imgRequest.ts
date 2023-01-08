import RequestCore from "./RequestCore";
import { ImgResponse } from "./types/imgRequest";

export default class ImgAPI extends RequestCore {
  public img_create = async (payload: {
    header?: object;
    body: File | undefined;
  }) => {
    const { requestURL, requestHeaders } = this.getParameters({
      headerObj: payload.header,
    });

    const formData = new FormData();

    formData.append("file", payload.body as File);
    // formData.append("comment", "테스트용 이미지");
    // formData.append("content_id", "1111");

    const result = await this.getResult<ImgResponse, FormData>({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
      body: formData,
    });

    return result;
  };
}
