export interface UserCreateRequest {
  email: string;
  nickname: string;
  password: string;
}

export interface UserLoginRequest {
  token: string;
}

// user duplication check
export interface UserCheckNickname {
  verificationCode: string;
}
export interface UserCheckEmail {
  nicknameExist: boolean;
}
