import { useEffect, useState } from "react";

export function useMediaQUery(mediaQuery: string) {
    const [isMatch, setIsMatch] = useState<boolean>(false);
    const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(null);

    useEffect(() => {
        const list = window.matchMedia(mediaQuery);
        setMediaQueryList(list);
        setIsMatch(list.matches);
    }, [mediaQuery]);

    useEffect(() => {
        const handleMatch = (e: MediaQueryListEvent) => setIsMatch(e.matches);
        mediaQueryList?.addEventListener("change", handleMatch);

        return () => mediaQueryList?.removeEventListener("change", handleMatch);
    }, [mediaQueryList]);

    return isMatch;
}
