export default function throttle(func: any, ms: number) {
  let throttled = false;
  return (...args: any) => {
    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        func(...args);
        throttled = false;
      }, ms);
    }
  };
}
