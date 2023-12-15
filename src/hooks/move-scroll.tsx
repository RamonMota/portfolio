import { useEffect, useState } from 'react'

export const useMoveScrollWindowsDown = (props: number) => {

    const [scrollOpacity, setScrollOpacity] = useState<number>(1);

    useEffect(() => {
        const handleScroll = () => {
            const distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
            const newScrollOpacity = distanceFromTop > props ? 0 : 1 - (distanceFromTop / props);

            setScrollOpacity(newScrollOpacity)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return scrollOpacity
}

interface IUseMoveScrollContent {
    containerSize: number;
    velocity: number;
}

export const useMoveScrollContent = (props: IUseMoveScrollContent) => {
    const [scrollOpacity, setScrollOpacity] = useState<number>(1);

    useEffect(() => {
        if (props.containerSize > 0 && props.velocity > 0) {
            const handleScroll = () => {
                const newScrollOpacity = props.containerSize > props.velocity ? 0 : 1 - (props.containerSize / props.velocity)

                setScrollOpacity(newScrollOpacity)
            }

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }

    });

    return scrollOpacity
}
