import { MutableRefObject } from "react";

export default function debounce(
    callback: () => void,
    ms: number,
    timeoutId: MutableRefObject<ReturnType<typeof setTimeout> | undefined>
) {
    return (e?: any) => {
        if (timeoutId.current) clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(callback, ms);
    };
}
