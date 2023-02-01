import { useQuery } from "@tanstack/react-query";

const useUserInfo = () => {
  const { data } = useQuery<
    | {
        iss: string;
        id: number;
        lat: number;
        email: string;
      }
    | undefined
  >(["user"]);

  return { userData: data };
};

export default useUserInfo;
