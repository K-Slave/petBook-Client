import { queryClientOptions } from "@lib/globalConst";
import { DefaultOptions, QueryClient } from "@tanstack/react-query";

export default function createQueryClient(
  options: DefaultOptions<unknown> = {}
) {
  return new QueryClient({
    defaultOptions: {
      queries: queryClientOptions,
    },
  });
}
