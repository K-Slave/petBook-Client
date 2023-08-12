import { DefaultOptions, QueryClient } from "@tanstack/react-query";
import { queryClientOptions } from "@lib/globalConst";

export default function createQueryClient(
  options: DefaultOptions<unknown> = {}
) {
  return new QueryClient({
    defaultOptions: {
      queries: queryClientOptions,
    },
  });
}
