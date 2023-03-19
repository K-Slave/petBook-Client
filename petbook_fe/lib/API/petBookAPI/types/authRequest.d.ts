export interface AuthLoginRequest {
  email: string;
  password: string;
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
