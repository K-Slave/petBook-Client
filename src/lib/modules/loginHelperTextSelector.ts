import { AuthLoginError } from "@lib/API/petBookAPI/types/authRequest";
import { loginHelperText } from "@lib/globalConst/helperTexts";

const loginHelperTextSelector = (resErrorData: AuthLoginError | null) => {
  if (resErrorData === null) return "";
  return loginHelperText.default;
};

export default loginHelperTextSelector;
