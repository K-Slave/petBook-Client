import "../styles/Globals.scss";
import "../styles/Texts.scss";
import "../styles/find/Texts.scss";

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;

// MyApp.getInitialProps = (context : AppProps) => {
//   const queryClient = new QueryClient();

//   const { requiredResources } = context.Component;

//   await Promise.all(
//     requiredResources.map(async resource => {
//       queryClient.fetchQuery(resource.key, resource.fetcher);
//     })
//   )
// }
