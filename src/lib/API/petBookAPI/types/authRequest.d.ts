export interface AuthLoginRequest {
  email: string;
  password: string;
  isSave?: boolean;
}

export interface ProxyLoginRequest extends AuthLoginRequest {
  isSave: boolean;
}

export interface AuthLoginResponse extends CommonRequestResult {
  result: AuthLoginSuccess;
}

export interface AuthLoginSuccess {
  accessToken?: string;
}
export interface AuthLoginError {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
  errorType: string;
  token?: undefined;
}

export interface AuthLogoutResponse {
  sucess: "true" | "false";
}

export interface AuthLoginCheckRequest {
  userId: number;
  enabled: boolean;
  username: string;
}
