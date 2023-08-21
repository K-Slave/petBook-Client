import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import { cookieKeyName, cookieOptions, memoizedValue } from "@lib/globalConst";
import {
  CheckCookie,
  MiddlewareResponseInit,
  RedirectProps,
  SetCookieProps,
  SetLazyAction,
  SetSession,
} from "@lib/types/common/MiddleWare";
import { DecodeOptions } from "@lib/types/common/Token";
import {
  DeviceType,
  UserAgentType,
  checkDevice,
  checkUserAgent,
} from "@lib/utils/userAgent/checkUserAgent";
import { getUserToken } from "./parse/getToken";

class MiddleWareService {
  public request: NextRequest;
  public url: string;

  public userToken: RequestCookie | null;
  public ownerToken: RequestCookie | null;
  public checkedOwnerToken: string | null;
  public locationCookie: RequestCookie | null;

  public userAgent: string;
  public device: DeviceType;
  public agentName: UserAgentType;

  constructor(request: NextRequest) {
    this.request = request;
    this.url = request.url;

    this.userToken = this.request.cookies.get(cookieKeyName.userToken) || null;
    this.ownerToken = this.request.cookies.get(cookieKeyName.owner) || null;
    this.checkedOwnerToken = null;
    this.locationCookie =
      this.request.cookies.get(cookieKeyName.location) || null;

    this.userAgent = request.headers.get("user-agent") as string;
    this.device = checkDevice(this.userAgent);
    this.agentName = checkUserAgent(this.userAgent);
  }

  public _parseUserToken = (decode: DecodeOptions) => {
    if (!this.userToken) {
      const userTokenCookieAction = this.setLazyAction({
        action: "COOKIE",
        name: cookieKeyName.userInfo,
        value: "",
        options: {
          maxAge: 0,
          path: "/",
          secure: true,
          sameSite: "strict",
          httpOnly: true,
        },
      });

      return { decodedTokenValue: null, userTokenCookieAction };
    }

    const checkCookie = this.checkCookie({
      name: cookieKeyName.userInfo,
      action: "COOKIE",
    });

    if (checkCookie !== "NOT_SET" && typeof checkCookie === "object") {
      return { decodedTokenValue: checkCookie.value };
    }

    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${this.userToken.value}`;

    const { decodedTokenValue } = getUserToken(this.userToken.value, {
      decode,
    });

    if (!decodedTokenValue) {
      const userTokenCookieAction = this.setLazyAction({
        action: "COOKIE",
        name: cookieKeyName.userInfo,
        value: "",
        options: {
          maxAge: 0,
          path: "/",
          secure: true,
          sameSite: "strict",
          httpOnly: true,
        },
      });

      return { decodedTokenValue: null, userTokenCookieAction };
    }

    const userTokenCookieAction = this.setLazyAction({
      action: "COOKIE",
      name: cookieKeyName.userInfo,
      value: JSON.stringify(decodedTokenValue),
      options: {
        path: "/",
        secure: true,
        sameSite: "strict",
        httpOnly: true,
      },
    });

    return { decodedTokenValue, userTokenCookieAction };
  };

  public _checkOwnerToken = () => {
    if (!this.ownerToken) {
      const ownerTokenSessionAction = this.setLazyAction({
        action: "COOKIE",
        name: cookieKeyName.ownerChecking,
        value: "",
        options: {
          maxAge: 0,
        },
      });

      return { checkedOwnerToken: null, ownerTokenSessionAction };
    }

    const checkCookie = this.checkCookie({
      name: cookieKeyName.ownerChecking,
      action: "COOKIE",
    });

    if (checkCookie !== "NOT_SET" && typeof checkCookie === "object") {
      return { checkedOwnerToken: checkCookie.value };
    }

    const checkedOwnerToken =
      this.ownerToken.value === process.env.NEXT_PUBLIC_OWNER
        ? this.ownerToken.value
        : null;

    this.checkedOwnerToken = checkedOwnerToken;

    if (!checkedOwnerToken) return { checkedOwnerToken: null };

    const ownerTokenSessionAction = this.setLazyAction({
      action: "COOKIE",
      name: cookieKeyName.ownerChecking,
      value: checkedOwnerToken,
      options: {
        path: "/",
        sameSite: "strict",
        secure: true,
        maxAge: cookieOptions.loginMaxAge,
        httpOnly: cookieKeyName.owner.includes(cookieKeyName.location)
          ? false
          : true,
      },
    });

    return { checkedOwnerToken, ownerTokenSessionAction };
  };

  public _ownerRedirect = () => {
    return this.redirect({
      location: "/?owner_author=true",
    });
  };

  public _authRedirect = () => {
    const prevPath = this.request.cookies.get(memoizedValue.prevPath);

    return this.redirect({
      location: prevPath?.value || "/",
      setCookie: {
        name: memoizedValue.prevPath,
        value: this.request.nextUrl.pathname,
        options: {
          path: "/",
          maxAge: 0,
        },
      },
    });
  };

  public _putOwnerCookie = (response: NextResponse<unknown>) => {
    if (
      this.checkCookie({ name: cookieKeyName.owner, action: "SESSION" }) ===
      "SET"
    )
      return;

    this.setCookie({
      response,
      name: cookieKeyName.owner,
      value: cookieKeyName.owner.includes(cookieKeyName.location)
        ? encodeURIComponent(process.env.NEXT_PUBLIC_OWNER)
        : process.env.NEXT_PUBLIC_OWNER,
      options: {
        path: "/",
        sameSite: "strict",
        secure: true,
        maxAge: cookieOptions.loginMaxAge,
        httpOnly: cookieKeyName.owner.includes(cookieKeyName.location)
          ? false
          : true,
      },
    });

    this.setSession({
      response,
      name: cookieKeyName.owner,
    });
  };

  public _putUserTokenCookie = (response: NextResponse<unknown>) => {
    if (this.userToken) {
      if (
        this.checkCookie({
          name: cookieKeyName.userToken,
          action: "SESSION",
        }) === "SET"
      )
        return;

      this.setCookie({
        response,
        name: cookieKeyName.userToken,
        value: this.userToken.value,
        options: {
          maxAge: cookieOptions.loginMaxAge,
        },
      });

      this.setSession({
        response,
        name: cookieKeyName.userToken,
      });
    }
  };

  public _putLocationCookie = (response: NextResponse<unknown>) => {
    if (this.locationCookie) {
      if (
        this.checkCookie({
          name: cookieKeyName.location,
          action: "SESSION",
        }) === "SET"
      )
        return;

      this.setCookie({
        response,
        name: cookieKeyName.location,
        value: encodeURIComponent(
          JSON.stringify(this.locationCookie.value || "")
        ),
        options: {
          maxAge: cookieOptions.oneMonth,
          secure: true,
          sameSite: "strict",
          path: "/",
        },
      });

      this.setSession({
        response,
        name: cookieKeyName.location,
      });
    }
  };

  public generateResponse = (initArgs?: MiddlewareResponseInit) => {
    const response = NextResponse.next(initArgs);

    this.setCookie({
      response,
      name: cookieKeyName.device,
      value: this.device,
    });

    this.setCookie({
      response,
      name: cookieKeyName.agentName,
      value: this.agentName,
    });

    return { response };
  };

  public setCookie = ({ response, name, value, options }: SetCookieProps) => {
    response.cookies.set(name, value, options);
  };

  public setSession = ({ response, name }: SetSession) => {
    response.cookies.set(`${name}_SESSION`, "SET");
  };

  public setLazyAction = ({ action, name, value, options }: SetLazyAction) => {
    const exec = (response: NextResponse) => {
      if (action === "COOKIE" && value) {
        this.setCookie({
          response,
          name,
          value,
          options,
        });
      }

      if (action === "SESSION") {
        this.setSession({
          response,
          name,
        });
      }
    };

    return exec;
  };

  public checkCookie = ({ name, action }: CheckCookie) => {
    const key = action === "COOKIE" ? name : `${name}_SESSION`;
    const cookie = this.request.cookies.get(key);

    if (action === "COOKIE") {
      return cookie ? cookie : "NOT_SET";
    }

    return cookie ? "SET" : "NOT_SET";
  };

  public redirect = ({ location, setCookie }: RedirectProps) => {
    const response = NextResponse.redirect(new URL(location, this.url));

    if (setCookie) {
      this.setCookie({
        response,
        name: setCookie.name,
        value: setCookie.value,
        options: setCookie.options,
      });

      this.setSession({
        response,
        name: setCookie.name,
      });
    }

    return response;
  };
}

export default MiddleWareService;
