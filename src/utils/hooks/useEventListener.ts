import { useEffect } from "react";

export function useEventListener(
    eventType: string,
    callback: (e: Event) => void,
    element: EventTarget = window,
) {
    useEffect(() => {
        if (element === null) return;
        const handler = (e: Event) => callback(e);
        element.addEventListener(eventType, handler);

        return () => element.removeEventListener(eventType, handler);
    }, [eventType, element, callback]);
}
