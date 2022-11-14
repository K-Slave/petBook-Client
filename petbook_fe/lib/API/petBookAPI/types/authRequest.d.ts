export interface AuthLoginRequest {
  email: string;
  password: string;
}

export interface AuthLoginCheckRequest {
  userId: number;
  enabled: boolean;
  username: string;
}
