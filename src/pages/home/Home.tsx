
import { SocialMedia } from '../../components/social-media';
import './home.scss'
import { HorizontalScroll } from '../../components/horizontal-scroll';
import { useScreenSize } from '../../hooks/size-screen';
import { CardItem } from '../../components/card';
import { useState } from 'react';
import { useIdContext } from '../../config/idContext';
import { HeaderMobile } from '../../components/header-mobile';
import { Paths } from '../../config/paths/path';

export const Home = () => {

    const screen = useScreenSize()
    const { id } = useIdContext();

    return (
        <div className='container-home' style={id.idName !== '' ? { transform: 'scale(0.8)' } : undefined}>
            <div className='content-top'>
                {screen.isMobile &&
                    <HeaderMobile />
                }
                <div className='content-float-main'>
                    <div className='content-text-main'>
                        {!screen.isMobile &&
                            <div className='content-title'>
                                <h1>RAMON <b>MOTA</b></h1>
                            </div>
                        }
                        <p className='color-principal'>DIRTYING</p>
                        <p className='color-principal'>MY FINGERS</p>
                        <p>SINCE</p>
                        <p>2015</p>
                    </div>
                    <div className='content-skills'>
                        <p>front end developer</p>
                        <p>Illustrator</p>
                        <p>UI/UX</p>
                    </div>
                </div>
            </div>
            <div className='content-list-card'>
                <CardItem idName='sebrae'
                    link={Paths.SEBRAE} />
            </div>

        </div >
    )
}