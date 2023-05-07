import { QueryKeyList } from "@lib/queries";
import { useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";

const useServerQueryData = <K>(
  key: QueryKeyList | string,
  isClientFetch?: boolean
) => {
  const queryClient = useQueryClient();
  const clientHydrated = useRef(false);
  if (isClientFetch) return { serverData: null, clientHydrated };
  const serverData = queryClient.getQueryData<K>([key + "_RESOURCE"]);

  return { serverData, clientHydrated };
};

export default useServerQueryData;
