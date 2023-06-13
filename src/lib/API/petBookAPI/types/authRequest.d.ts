export interface AuthLoginRequest {
  email: string;
  password: string;
  isSave?: boolean;
}

export interface ProxyLoginRequest extends AuthLoginRequest {
  isSave: boolean;
}

export interface AuthLoginResponse {
  token?: string;
}

export interface AuthLogoutResponse {
  sucess: "true" | "false";
}

export interface AuthLoginCheckRequest {
  userId: number;
  enabled: boolean;
  username: string;
}
