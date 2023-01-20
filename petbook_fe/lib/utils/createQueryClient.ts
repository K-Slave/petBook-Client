import { DefaultOptions, QueryClient } from "@tanstack/react-query";

export default function createQueryClient(
  options: DefaultOptions<unknown> = {}
) {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 300000,
      },
      ...options,
    },
  });
}
