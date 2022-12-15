import { NextPageContext } from "next";
import cookies from "next-cookies";

export async function setHttpOnlyCookie(cookie : { key: string, value: string }): Promise<{ success: boolean }> {
    const res = await fetch("/api/cookie", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cookie)
    });
    const data = await res.json();
    return data;
}

export async function removeHttpOnlyCookie(key: string): Promise<{ success: boolean }> {
    const res = await fetch("/api/cookie", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ key })
    });
    const data = await res.json();
    return data;
}

export async function getHttpOnlyCookie({ ctx, key }: { ctx: NextPageContext, key: string }): Promise<string | undefined> {
    if (typeof window === "undefined") { // server-side
        const allCookies = cookies(ctx);
        return new Promise((resolve) => { resolve(allCookies.petBookUser); });
    }
    // client-side
    const res = await fetch(`/api/cookie?key=${key}`);
    const { value } = await res.json();
    return value;
}
