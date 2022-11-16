export interface UserCreateRequest {
  email: string;
  nickname: string;
  password: string;
}

export interface UserLoginRequest {
  token: string;
}
