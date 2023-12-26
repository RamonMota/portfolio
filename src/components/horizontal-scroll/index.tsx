import React, { Fragment, ReactNode, useEffect, useRef, useState } from 'react'
import './index.scss'
import { useScreenSize } from '../../hooks/size-screen';
import { useIdContext } from '../../config/idContext';


export const HorizontalScroll = (props: { children?: ReactNode }) => {

    const screen = useScreenSize()

    const containerRef = useRef<any>(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [padddingDinamid, setPadddingDinamid] = useState<number>(0);
    const [noScroll, setNoScroll] = useState<boolean>(false);
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

    const scrollToCard = (cardId: any) => {
        const container = containerRef.current;
        const card = document.getElementById(cardId);

        if (card && container) {
            const containerCenter = container.offsetWidth / 2;
            const cardCenter = card.offsetLeft - container.offsetLeft + card.offsetWidth / 2;
            const scrollLeft = cardCenter - containerCenter;
            container.scrollTo({
                left: scrollLeft + 200,
                behavior: 'smooth',
            })
        }
    };

    useEffect(() => {
        if (id.idName !== '') {
            scrollToCard(id.idName);
            // setTimeout(() => { setNoScroll(true) }, 300
        } else {
            // setNoScroll(false)
        }
    }, [id.idName]);

    return (
        <>
            <div ref={containerRef}
                onWheel={handleScroll}
                className={`content-horizontal-scroll ${noScroll ? 'no-scroll' : ''}`}>
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
