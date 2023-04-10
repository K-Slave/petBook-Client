import keyName from "@lib/commonValue/keyName";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface UserInfo {
  iss: string;
  id: number;
  lat: number;
  email: string;
}

const useUserInfo = () => {
  const { data } = useQuery<UserInfo | undefined>([keyName.userInfo]);

  return { userData: data };
};

export const useSetUserInfo = () => {
  // const { refetch } = useQuery<UserInfo | undefined>([keyName.userInfo]);
  const client = useQueryClient();

  const mutate = (data: UserInfo) => {
    client.setQueryData([keyName.userInfo], data);
  };

  return mutate;
};

export default useUserInfo;
