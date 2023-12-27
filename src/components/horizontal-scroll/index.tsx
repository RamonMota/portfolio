import React, { Fragment, ReactNode, useEffect, useRef, useState } from 'react'
import './index.scss'
import { useScreenSize } from '../../hooks/size-screen';
import { useIdContext } from '../../config/idContext';


export const HorizontalScroll = (props: { children?: ReactNode }) => {

    const screen = useScreenSize()

    const containerRef = useRef<any>(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [padddingDinamid, setPadddingDinamid] = useState<number>(0);
    const { id } = useIdContext();

    const handleScroll = (e: React.WheelEvent) => {
        if (e.deltaY !== 0 && containerRef.current) {

            const currentScrollLeft = containerRef.current.scrollLeft;
            containerRef.current.scrollLeft = currentScrollLeft + e.deltaY;
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const maxScreen = 1024;
        const dimensaoSobra = windowWidth - maxScreen;
        setPadddingDinamid(dimensaoSobra / 2);
    }, [windowWidth]);

    useEffect(() => {
        if (id.idName !== '') {
            const contentScroll = containerRef.current;
            const card = document.getElementById(id.idName);

            if (card && contentScroll) {
                const containerCenter = contentScroll.offsetWidth / 2;
                const cardCenter = card.offsetLeft - contentScroll.offsetLeft + card.offsetWidth / 2;
                const scrollLeft = cardCenter - containerCenter;
                contentScroll.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth',
                })
            }
        }
    }, [id.idName]);

    return (
        <>
            <div ref={containerRef}
                onWheel={handleScroll}
                className={`content-horizontal-scroll ${id.idName !== '' ? 'no-scroll' : ''}`}>
                {screen.isDesktop &&
                    <Fragment>
                        <div className='left' />
                        <div style={{ minWidth: `${padddingDinamid - 172}px` }} />
                    </Fragment>
                }
                {props.children}
                {screen.isDesktop &&
                    <div className='right' />
                }
            </div>
        </>
    )
}
