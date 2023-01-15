import Router from "next/router";
import { UrlObject } from "url";

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
  Router.push(url, as, options)
    .then(thenCallback)
    .catch(catchCallback || ((e) => console.error(e)));
};

export default navigator;
