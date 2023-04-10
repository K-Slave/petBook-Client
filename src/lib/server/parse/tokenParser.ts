import DecodedUserInfo from "@lib/types/DecodedUserInfo";
import jwtDecode from "jwt-decode";

const tokenParser = (token: string) => {
  const userInfo = jwtDecode<DecodedUserInfo>(token);
  return {
    userInfo,
  };
};

export default tokenParser;
