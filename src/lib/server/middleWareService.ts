import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";
import { sprPetBookClient } from "@lib/API/axios/axiosClient";
import {
  cookieKeyName,
  cookieOptions,
  headerKeyName,
  memoizedValue,
} from "@lib/globalConst";
import {
  MiddlewareResponseInit,
  RedirectProps,
  SetCookieProps,
  SetSession,
} from "@lib/types/common/MiddleWare";
import { DecodeOptions } from "@lib/types/common/Token";
import localConsole from "@lib/utils/localConsole";
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
    if (
      this.checkSession({ name: cookieKeyName.userTokenParsing }) === "SET" ||
      !this.userToken
    )
      return { decodedTokenValue: null };

    sprPetBookClient.defaults.headers.common.Authorization = `Bearer ${this.userToken.value}`;

    const { decodedTokenValue } = getUserToken(this.userToken.value, {
      decode,
    });

    return { decodedTokenValue };
  };

  public _checkOwnerToken = () => {
    if (
      this.checkSession({ name: cookieKeyName.ownerChecking }) === "SET" ||
      !this.ownerToken
    )
      return { checkedOwnerToken: null };

    const checkedOwnerToken =
      this.ownerToken.value === process.env.NEXT_PUBLIC_OWNER
        ? this.ownerToken.value
        : null;

    this.checkedOwnerToken = checkedOwnerToken;

    return { checkedOwnerToken };
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
    if (this.checkSession({ name: cookieKeyName.owner }) === "SET") return;

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
      if (this.checkSession({ name: cookieKeyName.userToken }) === "SET")
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
      if (this.checkSession({ name: cookieKeyName.location }) === "SET") return;

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

  public generateResponse = <V>({
    initArgs,
    setCache,
  }: {
    initArgs?: MiddlewareResponseInit;
    setCache?: {
      key: string;
      value: V;
    };
  }) => {
    const init = {
      ...initArgs,
    };

    if (setCache) {
      init.headers = {
        ...initArgs?.headers,
        [setCache.key]: JSON.stringify(setCache.value),
      };
    }

    const response = NextResponse.next(init);

    return { response };
  };

  public setCookie = ({ response, name, value, options }: SetCookieProps) => {
    response.cookies.set(name, value, options);
  };

  public setSession = ({ response, name }: SetSession) => {
    response.cookies.set(`${name}_SESSION`, "SET");
  };

  public checkSession = ({ name }: { name: string }) => {
    const session = this.request.cookies.get(`${name}_SESSION`);

    return session ? "SET" : "NOT_SET";
  };

  public redirect = ({ location, setCookie }: RedirectProps) => {
    const response = NextResponse.redirect(location);

    if (setCookie) {
      if (this.checkSession({ name: setCookie.name }) === "SET") return;

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
