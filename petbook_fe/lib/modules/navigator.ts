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
  thenCallback?:
    | ((value: boolean) => boolean | PromiseLike<boolean>)
    | null
    | undefined,
  catchCallback?: ((reason: any) => void | PromiseLike<void>) | null | undefined
) {
  Router.push(url, as, options)
    .then(thenCallback)
    .catch(catchCallback || ((e) => console.error(e)));
}
