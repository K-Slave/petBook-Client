import { client } from "../fetch/axiosClient";
import getParameters from "../fetch/fetchFunctions";
import { BoardListRequest } from "./boardRequest";

class Board {
  constructor() {}

  async board_listreq(
    params: BoardListRequest,
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      url: "/board",
      params: params,
      defaultHeader: client.defaults.headers.common,
      headerObj: config?.headerObj,
    });

    const res = await client.get(requestURL, {
      timeout: 10000,
      headers: requestHeaders,
    });

    const result = {
      ...res,
      request: params,
    };

    return result;
  }
}

const board_axios = new Board();

export default board_axios;
