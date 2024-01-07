import { Tag } from '../../tag/tag'
import { Astronaut } from '../../../pages/sebrae/svg/astronaut'
import imgPhone from '../../../assets/img/mobile-usability-min.png'
import boxModal from '../../../assets/img/box.png'

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
                <img className='top-screen' src={imgPhone} alt="screen" />
            </div>
            <div className='content-card shurt-card bg-sebrae-successful second'>
                <div className='content-info'>
                    <div className='d-flex gap-xs'>
                        <Tag name='UI/UX' />
                    </div>
                    <div className='content-description'>
                        <h3>Mobile Usability</h3>
                        <p>Implementing a mobile-first approach, we are incorporating designated.</p>
                    </div>
                </div>
                <img className='top-modal' src={boxModal} alt="screen" />
            </div>
            <div className='content-card shurt-card bg-sebrae-alert third'>
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
