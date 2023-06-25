export function replaceQuery({
  fullPath,
  key,
  query,
  basePath: path,
}: {
  fullPath: string;
  key: string;
  query: string;
  basePath?: string;
}) {
  const splitedPath = fullPath.split("?");
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
  fullPath,
  key,
}: {
  fullPath: string;
  key: string;
}) {
  const splitedPath = fullPath.split("?");
  const basePath = splitedPath[0];
  const params = new URLSearchParams(splitedPath[1]);
  params.delete(key);
  return `${basePath[0] !== "/" ? `/${basePath}` : basePath}${
    params.toString().length ? `?${params.toString()}` : ""
  }`;
}
