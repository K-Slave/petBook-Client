import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { cookieKeyName } from "@lib/globalConst";

interface UserInfo {
  iss: string;
  id: number;
  lat: number;
  email: string;
}

const useUserInfo = () => {
  const { data } = useQuery<UserInfo | undefined>([cookieKeyName.userInfo]);
  return { userData: data };
};

export const useSetUserInfo = () => {
  // const { refetch } = useQuery<UserInfo | undefined>([keyName.userInfo]);
  const client = useQueryClient();

  const mutate = (data: UserInfo) => {
    client.setQueryData([cookieKeyName.userInfo], data);
  };

  return mutate;
};

export const useRemoveUserInfo = () => {
  const client = useQueryClient();
  const remove = async () => {
    await client.invalidateQueries([cookieKeyName.userInfo]); // invalidate 안됨
    client.setQueryData([cookieKeyName.userInfo], undefined);
  };
  return remove;
};

export default useUserInfo;
