import { useScreenSize } from '../../hooks/size-screen';
import { CardItem } from '../../components/card';
import { HeaderMobile } from '../../components/header-mobile';
import { PathsModal } from '../../config/paths/path';
import './home.scss'
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import useLoadPage from '../../hooks/load-page';
import logoSebrae from '../../assets/img/img-min.png'

export const Home = () => {

    const screen = useScreenSize()
    const location = useLocation()
    const currentPath = location.pathname;
    const isNotHome = Object.values(PathsModal).includes(currentPath as PathsModal)
    const { isLoaded } = useLoadPage(100)
    const [isHidden, setIsHidden] = useState(false)
    const [noContent, setNoContent] = useState(false)

    useEffect(() => {
        if (isNotHome) {
            setIsHidden(true)
            setTimeout(() => {
                setNoContent(true)
            }, 300)
        } else {
            setNoContent(false)
            setTimeout(() => {
                setIsHidden(false)
            }, 300)
        }
    }, [isNotHome])

    return (
        <>
            {noContent ? null :
                <div className={`container-home 
                ${isLoaded ? '' : 'hidden-home'}
                ${isHidden ? 'hidden-home' : ''}
                `}>
                    <div className='content-top'>
                        <div className='content-float-main'>
                            {screen.isMobile &&
                                <HeaderMobile />
                            }
                            <div className='content-text-main'>
                                {!screen.isMobile &&
                                    <div className='content-title'>
                                        <h1>RAMON <b>MOTA</b></h1>
                                    </div>
                                }
                                {/* <p>DIRTYING MY FINGERS SINCE 2015</p> */}
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
                        <CardItem
                            name='Sebrae events e-commerce'
                            handleChangePath={() => setIsHidden(true)}
                            image={logoSebrae}
                            link={PathsModal.SEBRAE} />
                        
                    </div>
                    <div className='content-bottom mb-footer'>
                        <p>need a creative mind?</p>
                        <p>Let’s work together</p>
                    </div>
                </div >
            }
        </>
    )
}

