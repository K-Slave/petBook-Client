import { AuthLoginError } from "@lib/API/petBookAPI/types/authRequest";

const loginHelperTextSelector = (resErrorData: AuthLoginError | null) => {
  if (resErrorData === null) return "";
  return "이메일 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.";
};

export default loginHelperTextSelector;
