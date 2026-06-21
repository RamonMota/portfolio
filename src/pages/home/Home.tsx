import { HeaderMobile } from '../../components/molecules/header-mobile';
import { Footer } from '../../components/organisms/footer';
import './home.scss'
import { useEffect, useState } from 'react';
import { useRoute } from '../../context/RouteContext';
import pt from '../../config/locales/pt.json'
import en from '../../config/locales/en.json'
import { useLanguageContext } from '../../context/LanguageContext';
import { projects } from '../../config/projects/projects';
import { ProjectMosaic } from '../../components/organisms/project-mosaic';



export const Home = () => {

    const { actualRoute, interval } = useRoute();
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
                    <ProjectMosaic projects={projects} onProjectSelect={() => setRenderHome(false)} />
                </div>
                <Footer isHome={true} />
            </div >
        </>
    )
}
