import localConsole from "./localConsole";

const delay = (ms?: number | undefined) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export default delay;
