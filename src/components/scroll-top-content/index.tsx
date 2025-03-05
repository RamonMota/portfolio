import React, { useEffect, useState } from 'react'
import { useScreenSize } from '../../hooks/size-screen';

export const ScrollTopContent = (props: { children?: any | null, className?: string }) => {
    const screen = useScreenSize();
    const [padding, setPadding] = useState(68);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight / 2;
            let newPadding = 68 * (1 - Math.min(scrollY / windowHeight, 1));

            setPadding(newPadding);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={props.className} style={screen.isTablet ? { paddingBottom: `${padding}px` } : {}}>
            {props.children}
        </div>
    )
}
