import loadingState from "@atoms/common/loadingState";
import Router from "next/router";
import { useSetRecoilState } from "recoil";
import { UrlObject } from "url";

const useLoaderNavigate = () => {
  const setLoading = useSetRecoilState(loadingState);

  const navigator = ({
    url,
    as,
    options,
    thenCallback,
    catchCallback,
  }: {
    url: UrlObject | string;
    as?: UrlObject | string;
    options?: {
      shallow?: boolean;
      locale?: string | false;
      scroll?: boolean;
    };
    thenCallback?: (value?: boolean) => void;
    catchCallback?: (reason?: any) => void;
  }) => {
    setLoading(true);
    Router.push(url, as, options)
      .then((value) => {
        if (thenCallback) {
          thenCallback(value);
        }
        setLoading(false);
      })
      .catch(catchCallback || ((e) => console.error(e)));
  };

  return { navigator };
};

export default useLoaderNavigate;
