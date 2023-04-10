export default function cleanObject<T>(obj: any) {
  const getNewObj: any = { ...obj };

  if (obj) {
    const propNames = Object.keys(obj);

    for (const prop of propNames) {
      if (
        getNewObj[prop] === undefined ||
        getNewObj[prop] === null ||
        getNewObj[prop] === ""
      ) {
        delete getNewObj[prop];
      }
    }
  }

  return getNewObj as T;
}
