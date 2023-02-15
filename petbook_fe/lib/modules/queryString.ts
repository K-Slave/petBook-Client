import { NextRouter } from "next/router";

export function replaceQuery({
  router,
  key,
  query,
  basePath: path,
}: {
  router: NextRouter;
  key: string;
  query: string;
  basePath?: string;
}) {
  const splitedPath = router.asPath.split("?");
  const basePath = path || splitedPath[0];
  const params = new URLSearchParams(splitedPath[1]);
  params.delete(key);
  return `${basePath[0] !== "/" ? `/${basePath}` : basePath}?${
    params.toString().length
      ? `${params.toString()}&${key}=${query}`
      : `${key}=${query}`
  }`;
}

export function removeQuery({
  router,
  key,
}: {
  router: NextRouter;
  key: string;
}) {
  const splitedPath = router.asPath.split("?");
  const basePath = splitedPath[0];
  const params = new URLSearchParams(splitedPath[1]);
  params.delete(key);
  return `${basePath[0] !== "/" ? `/${basePath}` : basePath}${
    params.toString().length ? `?${params.toString()}` : ""
  }`;
}
