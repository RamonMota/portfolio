import { useEffect, useState } from 'react'

function useMediaQuery(query: string, defaultMatches = window.matchMedia(query).matches) {
    const [matches, setMatches] = useState(defaultMatches);

    useEffect(() => {
        const media = window.matchMedia(query);

        if (media.matches !== matches) setMatches(media.matches);

        const listener = () => setMatches(media.matches);

        media.addListener(listener);

        return () => media.removeListener(listener);
    }, [query, matches]);

    return matches;
}

export default useMediaQuery;

export const useScreenSize = () => {
    const isMobile = useMediaQuery("(max-width:  480px)")
    const isTablet = useMediaQuery("(max-width:  959px)")
    const isDesktop = useMediaQuery("(min-width: 1025px)")

    return {
        isMobile,
        isTablet,
        isDesktop
    }
}
