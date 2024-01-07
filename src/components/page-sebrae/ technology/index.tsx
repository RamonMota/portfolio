import figma from '../../../pages/sebrae/img/FM.png'
import Photoshop from '../../../pages/sebrae/img/PS.png'
import Illustrator from '../../../pages/sebrae/img/AI.png'
import JavaScript from '../../../pages/sebrae/img/JS.png'
import Bootstrap from '../../../pages/sebrae/img/BT.png'

import './index.scss'

export const Technology = () => {

    const techList = [
        {
            link: 'https://www.figma.com/',
            image: figma,
            name: 'figma'
        },
        {
            link: 'https://www.adobe.com/ca/products/photoshop',
            image: Photoshop,
            name: 'Photoshop'
        },
        {
            link: 'https://www.adobe.com/ca/products/illustrator',
            image: Illustrator,
            name: 'Illustrator'
        },
        {
            link: 'https://www.javascript.com/',
            image: JavaScript,
            name: 'JavaScript'
        },
        {
            link: 'https://getbootstrap.com/',
            image: Bootstrap,
            name: 'Bootstrap'
        },
    ]

    return (
        <>
            {techList.map((tech, index) => (
                <a key={index} className='content-tech' href={tech.link}>
                    <img src={tech.image} alt="" />
                    <p>{tech.name}</p>
                </a>
            ))}
        </>
    )
}
