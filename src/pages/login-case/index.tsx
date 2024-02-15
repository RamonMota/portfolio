import { Footer } from "../../components/footer"
import { BallMain } from "../../components/page-betting/ball-main"
import { ContentIframe } from "../../components/page-sebrae/content-iframe/intex"
import PrintHome from '../../assets/img/screen-wide-betpix.png'

import './index.scss'
import { useEffect, useState } from "react"

export const LoginCase = () => {

    const [scale, setScale] = useState(1.5); // Estado para controlar a escala do elemento


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            // Calcula a escala com base na posição de rolagem
            const newScale = 1.5 - (scrollPosition / windowHeight) * 0.5;
            setScale(Math.max(1, newScale)); // Limita a escala mínima para 1
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='content-page-betting-template'>
            <div className="content-top">
                <div className="center-content">
                    <div className='content-text'>
                        <h1>Betting Sport Template</h1>
                        <h2>
                            Prototyping and implementation of the first version of a sports betting system
                        </h2>
                        <span className='point-principal' />
                    </div>
                    <BallMain />
                </div>
            </div>
            <div className="content-main">
                <img className="img-template" src={PrintHome} alt="screen template" style={{
                    transform: `scale(${scale})`,
                }} />
                <ContentIframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F4SMcNumfgCs0zxg4IvNjkB%2FOrion-Ramon-_-Twinfo%3Ftype%3Ddesign%26node-id%3D2943%253A348%26mode%3Ddesign%26t%3DgV3RBnUBUTPzRWUO-1" />
                <Footer />
            </div>
        </div>
    )
}
