import { useSetResource } from "../common/useResource";
import { LOGIN_REQUEST } from "@lib/resources/commonResource";
import { AuthLoginError } from "@lib/API/petBookAPI/types/authRequest";
import loginHelperTextSelector from "@lib/modules/login/loginHelperTextSelector";

const useLoginMutaion = () => {
  const { mutateAsync, status, failureReason } = useSetResource(LOGIN_REQUEST);

  const errorResData = failureReason as AuthLoginError | null;

  const errorHelperText = loginHelperTextSelector(errorResData);

  return {
    mutateAsync,
    status,
    failureReason: errorResData,
    errorHelperText,
  };
};

export default useLoginMutaion;
