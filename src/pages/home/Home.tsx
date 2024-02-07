import { useScreenSize } from '../../hooks/size-screen';
import { CardItem } from '../../components/card';
import { HeaderMobile } from '../../components/header-mobile';
import { Paths, PathsPages } from '../../config/paths/path';
import { useHistory, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import bannerVaidebet from '../../assets/img/banner-vaidebet.png'
import bannerSebrae from '../../assets/img/banner-sebrae.png'
import { Footer } from '../../components/footer';
import './home.scss'

export const Home = () => {

    const screen = useScreenSize()
    const history = useHistory()
    const [isOpenPage, setIsOpenPage] = useState<boolean>(false)
    const location = useLocation()
    const currentPath = location.pathname;

    useEffect(() => {
        if (currentPath === Paths.HOME) {
            setTimeout(() => {
                setIsOpenPage(true)
            }, 600)
        }
    }, [currentPath])

    const handleChangePage = (router: string) => {
        setIsOpenPage(false)
        setTimeout(() => {
            history.push(router)
        }, 400)
    }

    return (

        <div className={`container-home ${isOpenPage ? '' : 'hidden-home'} `}>
            <div className='content-top'>
                <div className='content-float-main'>
                    <HeaderMobile />
                    <div className='content-text-main'>
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
            <div className='d-flex flex-column gap-sm'>
                <p className='title-project'>Project</p>
                <div className='content-list-card'>
                    <CardItem name='E-commerce Sebrae events'
                        image={bannerSebrae}
                        handleChangePath={() => handleChangePage(PathsPages.SEBRAE)} />
                    <CardItem isLocked={true} image={bannerVaidebet} />
                    <CardItem name='Case login UX'
                        handleChangePath={() => handleChangePage(PathsPages.LOGIN_CASE)} />
                </div>
            </div>
            <Footer isHome={true}/>
        </div >
    )
}

