import { Tag } from '../../tag/tag'
import { Astronaut } from '../../../pages/sebrae/svg/astronaut'
import imgPhone from '../../../assets/img/mobile-usability-min.png'
import cardPayment from '../../../assets/img/card-payment-min.png'
import imgHeatMap from '../../../assets/img/heat_map.png'

import './index.scss'

export const GridCardSebrae = () => {
    return (
        <div className='grid-cards-sebrae'>
            <div className='content-card large-card bg-sebrae-secondary first'>
                <div className='content-info'>
                    <div className='d-flex gap-xs'>
                        <Tag name='UI/UX' />
                        <Tag name='Front end' />
                    </div>
                    <div className='content-description'>
                        <h3>Enhanced Mobile Usability</h3>
                        <p>Implementing a mobile-first approach, we are incorporating designated breathing spaces to enhance user comfort and streamline platform accessibility.</p>
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
                        <h3>Guided Visual Navigation</h3>
                        <p>Utilizing color patterns to guide the user and emphasize priority information during navigation.</p>
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
                        <h3>Heat map</h3>
                        <p>
                            Learning from the user through tracking tools to enhance their experience on the platform</p>
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
                        <h3>Optimizing Web Performance for Visual Accessibility</h3>
                        <p>Illustrations Enhancing User Communication: Leveraging SVG Format for Web Optimization without Compromising Performance</p>
                    </div>
                </div>
                <Astronaut />
            </div>
        </div>
    )
}
