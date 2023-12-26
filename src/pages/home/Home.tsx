
import { SocialMedia } from '../../components/social-media';
import './home.scss'
import { HorizontalScroll } from '../../components/horizontal-scroll';
import { useScreenSize } from '../../hooks/size-screen';
import { CardItem } from '../../components/card';
import { useState } from 'react';

export const Home = () => {

    const screen = useScreenSize()

    return (
        <div className='container-home' >
            {screen.isMobile &&
                <div className='content-title'>
                    <h1>RAMON <b>MOTA</b></h1>
                    <div className='content-social'>
                        <SocialMedia />
                    </div>
                </div>
            }
            <HorizontalScroll>
                <div className='content-float-main'>
                    <div className='content-text-main'>
                        {!screen.isMobile &&
                            <div className='content-title'>
                                <h1>RAMON <b>MOTA</b></h1>
                            </div>
                        }
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
                <CardItem idName={'primeiro'}/>
                <CardItem idName={'terceiro'}/>
                <CardItem idName={'quarto'}/>
                <CardItem idName={'quinto'}/>
            </HorizontalScroll >
        </div >
    )
}