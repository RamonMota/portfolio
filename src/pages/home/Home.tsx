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

    useEffect(() => {
        let cardsTimeout: ReturnType<typeof setTimeout> | undefined;
        const homeTimeout = setTimeout(() => {
            setRenderHome(true);
            cardsTimeout = setTimeout(() => {
                setRenderCards(true);
            }, interval / 3);
        }, interval / 2);

        return () => {
            clearTimeout(homeTimeout);
            if (cardsTimeout) clearTimeout(cardsTimeout);
        };
    }, [actualRoute, interval]);

    return (
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
                <p className='max-w-[1024px] text-sm text-white/30 m-auto w-full'>{languegeRender.home.labelProject}</p>
                <ProjectMosaic projects={projects} onProjectSelect={() => setRenderHome(false)} />
            </div>
            <Footer isHome={true} />
        </div >
    )
}
