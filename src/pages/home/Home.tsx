import { useRef } from 'react';
import { SocialMedia } from '../../components/social-media';
import './home.scss'

export const Home = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (e: React.WheelEvent) => {
        if (e.deltaY !== 0 && containerRef.current) {
            e.preventDefault();

            const currentScrollLeft = containerRef.current.scrollLeft;
            containerRef.current.scrollLeft = currentScrollLeft + e.deltaY;
        }
    }


    return (
        <div className='container-home' >
            <div className='content-title'>
                <h1>RAMON <b>MOTA</b></h1>
                <div className='content-social'>
                    <SocialMedia />
                </div>
            </div>
            <div ref={containerRef}
                onWheel={handleScroll}
                className='content-horizontal-scroll'>
                <div className='content-float-main'>
                    <div className='content-text-main'>
                        <p className='color-principal'>DIRTYING</p>
                        <p className='color-principal'>MY</p>
                        <p className='color-principal'>FINGERS</p>
                        <p>SINCE</p>
                        <p>2015</p>
                    </div>
                    <div className='content-skills'>
                        <p>front end developer</p>
                        <p>Illustrator</p>
                        <p>UI/UX</p>
                    </div>
                </div>
                <div className='card-fake'/>
                <div className='card-fake'/>
                <div className='card-fake'/>
                <div className='card-fake'/>
                <div className='card-fake'/>
            </div>
        </div>
    )
}