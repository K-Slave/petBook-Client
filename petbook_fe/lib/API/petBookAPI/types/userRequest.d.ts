export interface UserCreateRequest {
  email: string;
  nickname: string;
  password: string;
}

export interface UserLoginRequest {
  token: string;
}

// user nickname duplication check
export interface UserCheckNickname {
  nicknameExist: string;
}
export interface UserCheckEmail {
  nicknameExist: boolean;
}

export interface ErrorResponse {
  response: {
    data: {
      error: string;
      message: string;
      path: string;
      status: number;
      timestamp: string;
    };
  };
}
