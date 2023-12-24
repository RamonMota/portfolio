import React, { ReactNode, useEffect, useRef, useState } from 'react'
import './index.scss'


export const HorizontalScroll = (props: { children?: ReactNode }) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [larguraJanela, setLarguraJanela] = useState(window.innerWidth);
    const [padddingDinamid, setPadddingDinamid] = useState(0);

    const handleScroll = (e: React.WheelEvent) => {
        if (e.deltaY !== 0 && containerRef.current) {

            const currentScrollLeft = containerRef.current.scrollLeft;
            containerRef.current.scrollLeft = currentScrollLeft + e.deltaY;
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setLarguraJanela(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const larguraContainer = 1024;
        const dimensaoSobra = larguraJanela - larguraContainer;
        setPadddingDinamid(dimensaoSobra / 2);
    }, [larguraJanela]);





    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScrollNew = () => {
        const scrollCenter = window.innerWidth / 2;
        const scrollPosition = window.scrollX + scrollCenter;
        setScrollPosition(scrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollNew);

        return () => {
            window.removeEventListener('scroll', handleScrollNew);
        };
    }, []);

    const calculateScale = (position: any) => {
        // Defina os valores máximos e mínimos de escala
        const maxScale = 2;
        const minScale = 0.5;

        // Calcula a escala com base na posição do scroll
        const scale = Math.max(
            minScale,
            maxScale - Math.abs(window.innerWidth / 2 - position) / (window.innerWidth / 2)
        );

        return scale;
    };

    return (
        <div ref={containerRef}
            onWheel={handleScroll}
            className='content-horizontal-scroll'>
            <div className='left' />
            <div style={{ minWidth: `${padddingDinamid - 172}px` }} />
            {props.children}
            <div className='right' />
        </div>
    )
}
