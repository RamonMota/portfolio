import { useScreenSize } from '../../hooks/size-screen';
import { CardItem } from '../../components/card';
import { HeaderMobile } from '../../components/header-mobile';
import { PathsModal } from '../../config/paths/path';
import './home.scss'
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import useLoadPage from '../../hooks/load-page';
import bannerSebrae from '../sebrae/img/thumbnail.png'

export const Home = () => {

    const screen = useScreenSize()
    const location = useLocation()
    const currentPath = location.pathname;
    const isNotHome = Object.values(PathsModal).includes(currentPath as PathsModal)
    const { isLoaded } = useLoadPage(300)
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
                            image='https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            link={PathsModal.SEBRAE} />
                        <CardItem
                            name='Sport betting Plataform'
                            image='https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=579&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                             />
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

