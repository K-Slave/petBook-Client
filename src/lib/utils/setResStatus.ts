import localConsole from "./localConsole";

const setResStatus = (originStatus?: string | number) => {
  localConsole?.log(originStatus, "originStatus");
  const status = Number(originStatus);

  localConsole?.log(status, "status");

  return !isNaN(status) ? status : 500;
};

export default setResStatus;
