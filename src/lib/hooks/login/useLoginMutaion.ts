import { useSetResource } from "../common/useResource";
import { LOGIN_REQUEST } from "@lib/resources/commonResource";
import { AuthLoginError } from "@lib/API/petBookAPI/types/authRequest";
import loginHelperTextSelector from "@lib/modules/login/loginHelperTextSelector";
import { useQueryClient } from "@tanstack/react-query";
import { cookieKeyName } from "@lib/globalConst";
import DecodedUserInfo from "@lib/types/DecodedUserInfo";

const useLoginMutaion = () => {
  const { mutateAsync, status, failureReason } = useSetResource(LOGIN_REQUEST);
  const client = useQueryClient();

  const setUserInfo = (userInfo: DecodedUserInfo) => {
    client.setQueryData([cookieKeyName.userInfo], userInfo);
  };

  const errorResData = failureReason as AuthLoginError | null;

  const errorHelperText = loginHelperTextSelector(errorResData);

  return {
    mutateAsync,
    setUserInfo,
    status,
    failureReason: errorResData,
    errorHelperText,
  };
};

export default useLoginMutaion;
