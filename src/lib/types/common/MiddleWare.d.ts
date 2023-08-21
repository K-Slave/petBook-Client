import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextResponse } from "next/server";

export interface CookieOptions {
  path?: string;
  sameSite?: "lax" | "strict" | "none";
  secure?: boolean;
  maxAge?: number;
  httpOnly?: boolean;
}

export interface ResponseSetCookie extends RequestCookie {
  options?: CookieOptions;
  action: MiddleWareAction;
}

export interface RedirectProps {
  location: string;
  setCookie?: ResponseSetCookie;
}

export type MiddleWareAction = "COOKIE" | "SESSION";

export interface SetMiddleWareCookie {
  action: MiddleWareAction;
  response: NextResponse;
  name: string;
  value?: string;
  options?: CookieOptions;
}

export interface SetLazyAction {
  action: MiddleWareAction;
  name: string;
  value?: string;
  options?: CookieOptions;
}

export interface CheckMiddleWareCookie {
  name: string;
  action: MiddleWareAction;
}

export interface GlobalMiddleWareCache {
  device: DeviceType;
  agentName: UserAgentType;
  decodedTokenValue: DecodedUserInfo | null;
  checkedOwnerToken: string | null;
}

export interface MiddlewareResponseInit extends globalThis.ResponseInit {
  request?: ModifiedRequest;
}
