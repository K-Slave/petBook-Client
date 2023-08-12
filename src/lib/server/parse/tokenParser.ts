import jwtDecode from "jwt-decode";
import DecodedUserInfo from "@lib/types/DecodedUserInfo";

const tokenParser = (token: string) => {
  const userInfo = jwtDecode<DecodedUserInfo>(token);
  return {
    userInfo,
  };
};

export default tokenParser;
