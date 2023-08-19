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
  callback?: () => void;
  options?: CookieOptions;
}

export interface RedirectProps {
  location: string;
  setCookie?: ResponseSetCookie;
}

export interface SetCookieProps extends RequestCookie {
  response: NextResponse;
  options?: CookieOptions;
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
