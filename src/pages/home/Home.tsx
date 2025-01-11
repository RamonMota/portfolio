import { CardItem } from '../../components/card';
import { HeaderMobile } from '../../components/header-mobile';
import { Paths, PathsPages } from '../../config/paths/path';
import bannerVaidebet from '../../assets/img/banner-vaidebet.png'
import bannerSebrae from '../../assets/img/banner-sebrae.png'
import { Footer } from '../../components/footer';
import './home.scss'
import { useHandleChangePage } from '../../config/usehandleChangePage';
import { useEffect, useState } from 'react';
import { useRoute } from '../../context/RouteContext';

export const Home = () => {

    const handleChangePage = useHandleChangePage()
    const { actualRoute, setRoute, interval } = useRoute();
    const [renderHome, setIsRenderHome] = useState<boolean>(false)

    useEffect(() => {
            setTimeout(() => {
                setIsRenderHome(true)
            }, interval / 2)
    }, [actualRoute])

    const handleSelectContent = (path: string) => {
        setIsRenderHome(false)
        handleChangePage(path)
    }

    return (
        <div className={`${renderHome ? '' : 'hidden-home'} container-home`}>
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
                    <CardItem name='E-commerce Sebrae events' image={bannerSebrae} handleChangePath={() => handleSelectContent(PathsPages.SEBRAE)} />
                    <CardItem name='Betting Sport Template' image={bannerVaidebet} handleChangePath={() => handleSelectContent(PathsPages.SPORT_BETTING_PLATAFORM)} />
                    <CardItem name='Case login UX' isLocked={true} />
                </div>
            </div>
            <Footer isHome={true} />
        </div >
    )
}

