export async function setHttpOnlyCookie(cookie : { key: string, value: string }) {
    const res = await fetch("/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cookie)
    });
    const data = await res.json();
    return data;
}

export async function removeHttpOnlyCookie(key: string) {
    const res = await fetch("/api/token", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ key })
    });
    const data = await res.json();
    return data;
}
