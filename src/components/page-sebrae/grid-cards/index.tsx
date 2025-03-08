import { Tag } from '../../tag/tag'
import { Astronaut } from '../../../pages/sebrae/svg/astronaut'
import imgPhone from '../../../assets/img/mobile-usability-min.png'
import cardPayment from '../../../assets/img/card-payment-min.png'
import imgHeatMap from '../../../assets/img/heat_map.png'
import pt from '../../../config/locales/pt.json'
import en from '../../../config/locales/en.json'
import { useLanguageContext } from "../../../context/LanguageContext";

import './index.scss'

export const GridCardSebrae = () => {
    const { language } = useLanguageContext();
    const languegeRender = language === 'en' ? en : pt;

    return (
        <div className='grid-cards-sebrae'>
            <div className='content-card large-card bg-sebrae-secondary first'>
                <div className='content-info'>
                    <div className='d-flex gap-xs'>
                        <Tag name='UI/UX' />
                        <Tag name='Front end' />
                    </div>
                    <div className='content-description'>
                        <h3>{languegeRender.ecommerceSebrae.titleFirstBox}</h3>
                        <p>{languegeRender.ecommerceSebrae.subtitleFirstBox}</p>
                    </div>
                </div>
                <div className='content-top-sreen'>
                    <div className='finger-ux' />
                    <img className='top-screen' src={imgPhone} alt="screen" />
                </div>
            </div>
            <div className='content-card shurt-card bg-sebrae-successful second'>
                <img className='top-modal' src={cardPayment} alt="screen" />
                <div className='content-info'>
                    <div className='d-flex gap-xs'>
                        <Tag name='UI/UX' />
                    </div>
                    <div className='content-description'>
                    <h3>{languegeRender.ecommerceSebrae.titleSecondBox}</h3>
                    <p>{languegeRender.ecommerceSebrae.subtitleSecondBox}</p>
                    </div>
                </div>
            </div>
            <div className='content-card shurt-card bg-sebrae-alert third'>
                <img className='content-heat-map' src={imgHeatMap} alt="heat map" />
                <div className='content-info'>
                    <div className='d-flex gap-xs'>
                        <Tag name='UI/UX' />
                    </div>
                    <div className='content-description'>
                    <h3>{languegeRender.ecommerceSebrae.titleThirdBox}</h3>
                    <p>{languegeRender.ecommerceSebrae.subtitleThirdBox}</p>
                    </div>
                </div>

            </div>
            <div className='content-card large-card bg-sebrae-white fourth'>
                <div className='content-info'>
                    <div className='d-flex gap-xs'>
                        <Tag name='UI/UX' />
                        <Tag name='Front end' />
                    </div>
                    <div className='content-description'>
                    <h3>{languegeRender.ecommerceSebrae.titleFourthBox}</h3>
                    <p>{languegeRender.ecommerceSebrae.subtitleFourthBox}</p>
                    </div>
                </div>
                <Astronaut />
            </div>
        </div>
    )
}
