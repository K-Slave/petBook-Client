import { MutableRefObject } from "react";

export default function debounce<P extends object | undefined>(
    callback: (params: P) => void,
    ms: number,
    timeoutId: MutableRefObject<ReturnType<typeof setTimeout> | null>
) {
    return (params: P) => {
        if (timeoutId.current) clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(() => callback(params), ms);
    };
}
