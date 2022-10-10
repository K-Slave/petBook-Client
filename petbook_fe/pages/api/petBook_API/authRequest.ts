import { sprpetbookClient } from "../axios/axiosClient";
import getParameters, { getAxiosItems } from "../axios/xhrFunctions";

const { uri, client } = getAxiosItems("/api/v1", sprpetbookClient);

export default class AuthAPI {
  constructor() {
    if (!this.instance) {
      this.instance = this;
    }

    return this.instance;
  }

  instance = this;

  async login_check(params: any, config?: { headerObj?: object }) {}

  async login(
    body: {
      email: string;
      password: string;
    },
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri + "/login",
      headerObj: config?.headerObj,
    });

    const response = await client.post<loginRequest, any>(requestURL, body, {
      timeout: 10000,
      headers: requestHeaders,
    });

    const result = {
      ...response,
      request: {
        body: {
          ...body,
        },
      },
    };

    return result;
  }

  async register(
    body: {
      email: string;
      password: string;
    },
    config?: { headerObj?: object }
  ) {
    const { requestURL, requestHeaders } = getParameters({
      uri: uri + "/register",
      headerObj: config?.headerObj,
    });

    const response = await client.post<registerRequest, any>(requestURL, body, {
      timeout: 10000,
      headers: requestHeaders,
    });

    const result = {
      ...response,
      request: {
        body: {
          ...body,
        },
      },
    };

    return result;
  }
}

type loginRequest = {
  email: string;
  password: string;
};

type registerRequest = loginRequest;
