import Router from "next/router";
import { UrlObject } from "url";

export default function navigator(
  url: UrlObject | string,
  as?: UrlObject | string,
  options?: {
    shallow?: boolean;
    locale?: string | false;
    scroll?: boolean;
  },
  thenCallback?: ((value: void) => void | PromiseLike<void>) | null | undefined,
  catchCallback?: ((reason: any) => void | PromiseLike<void>) | null | undefined
) {
  const navigate = async () => {
    await Router.push(url, as, options);
  };

  navigate()
    .then(thenCallback)
    .catch(catchCallback || ((e) => console.error(e)));
}
