export function replaceQuery({
  asPath,
  key,
  query,
  basePath : path,
}: {
  asPath: string;
  key: string;
  query: string;
  basePath?: string;
}) {
  const splitedPath = asPath.split("?");
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
  asPath,
  key,
}: {
  asPath: string;
  key: string;
}) {
  const splitedPath = asPath.split("?");
  const basePath = splitedPath[0];
  const params = new URLSearchParams(splitedPath[1]);
  params.delete(key);
  return `${basePath[0] !== "/" ? `/${basePath}` : basePath}${
    params.toString().length ? `?${params.toString()}` : ""
  }`;
}
