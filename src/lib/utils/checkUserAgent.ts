export const checkUserAgent = (headerUserAgent?: string) => {
  const userAgent =
    typeof window !== "undefined"
      ? window.navigator.userAgent.toLowerCase()
      : headerUserAgent
      ? headerUserAgent.toLowerCase()
      : "";

  if (userAgent.includes("macintosh")) {
    if (!userAgent.includes("chrome")) {
      return "mac safari" as const;
    } else {
      return "mac chrome" as const;
    }
  }

  if (userAgent.includes("windows")) {
    return "windows" as const;
  }

  if (userAgent.includes("android")) {
    return "android" as const;
  }

  if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
    return "ios" as const;
  }

  return "" as const;
};

export type UserAgentType =
  | ""
  | "mac safari"
  | "mac chrome"
  | "windows"
  | "android"
  | "ios";

export const checkDevice = (headerUserAgent?: string) => {
  const userAgent =
    typeof window !== "undefined"
      ? window.navigator.userAgent.toLowerCase()
      : headerUserAgent
      ? headerUserAgent.toLowerCase()
      : "";

  if (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    )
  ) {
    return "mobile" as const;
  }

  return "web" as const;
};

export type DeviceType = "mobile" | "web";
