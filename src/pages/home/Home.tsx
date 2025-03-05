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
import pt from '../../config/locales/pt.json'
import en from '../../config/locales/en.json'
import { useLanguageContext } from '../../context/LanguageContext';



export const Home = () => {

    const handleChangePage = useHandleChangePage()
    const { actualRoute, setRoute, interval } = useRoute();
    const [renderHome, setRenderHome] = useState<boolean>(false)
    const [renderCards, setRenderCards] = useState<boolean>(false)
    const { language } = useLanguageContext();
    const languegeRender = language === 'en' ? en : pt;
    const isBr = language === 'pt';

    // const [isWelcome, setIsWelcome] = useState<boolean>(false)
    // const now = Date.now();
    // const hasWelcomeData = localStorage.getItem("WELCOME");
    // const has24hShownWelcome = (() => {
    //     if (!hasWelcomeData) return false;
    //     const { timestamp } = JSON.parse(hasWelcomeData);
    //     return (now - timestamp) >= 24 * 60 * 60 * 1000;
    // })();

    useEffect(() => {
        // if ((!hasWelcomeData || has24hShownWelcome) && actualRoute === Paths.HOME) {
        //     setIsWelcome(true);
        //     localStorage.setItem("WELCOME", JSON.stringify({ timestamp: now }));
        // }

        setTimeout(() => {
            setRenderHome(true);
            setTimeout(() => {
                setRenderCards(true);
            }, interval / 3);
        }, interval / 2);

    }, [actualRoute]);

    const handleSelectContent = (path: string) => {
        setRenderHome(false)
        handleChangePage(path)
    }

    return (
        <>
            {/* <Welcome isOpen={isWelcome} setIsOpen={() => setIsWelcome(!isWelcome)} /> */}

            <div className={`${renderHome ? '' : 'hidden-home'} container-home`}>
                <div className='content-top'>
                    <div className='content-float-main'>
                        <HeaderMobile />
                        <div className='content-text-main'>
                            <p className='color-principal'>{languegeRender.home.titleFirst.toUpperCase()}</p>
                            <p className={`color-principal ${isBr ? 'pt-text' : ''}`}>{languegeRender.home.titleSecond.toUpperCase()}</p>
                            <p>{languegeRender.home.titleThird.toUpperCase()}</p>
                            <p>{languegeRender.home.titleSince}</p>
                        </div>
                        <div className='content-skills'>
                            <p>{languegeRender.home.knologyFirst.toUpperCase()}</p>
                            <p>{languegeRender.home.knologySecond.toUpperCase()}</p>
                            <p>{languegeRender.home.knologyThird.toUpperCase()}</p>
                        </div>
                    </div>
                </div>
                <div className={`${renderCards ? '' : 'hidden-cards'} d-flex flex-column gap-sm`}>
                    <p className='title-project'>{languegeRender.home.labelProject}</p>
                    <div className='content-list-card'>
                        <CardItem name='Betting Sport Template' image={bannerVaidebet} handleChangePath={() => handleSelectContent(PathsPages.SPORT_BETTING_PLATAFORM)} />
                        <CardItem name='E-commerce Sebrae events' image={bannerSebrae} handleChangePath={() => handleSelectContent(PathsPages.SEBRAE)} />
                        <CardItem name='Case login UX' isLocked={true} />
                    </div>
                </div>
                <Footer isHome={true} />
            </div >
        </>
    )
}

