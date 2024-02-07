import { Footer } from "../../components/footer"
import { BallMain } from "../../components/page-betting/ball-main"
import { ContentIframe } from "../../components/page-sebrae/content-iframe/intex"

import './index.scss'

export const LoginCase = () => {
    return (
        <div className='content-page-betting-template'>
            <div className="content-top">
                <div className="center-content">
                    <div className='content-text'>
                        <h1>Betting Sport Template</h1>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula est vel tortor egestas sagittis. Donec eleifend nec tortor accumsan imperdiet. Nunc ut facilisis eros. Aenean non hendrerit metus. Suspendisse eleifend purus eu ipsum rhoncus pretium vitae eu dui.
                        </h2>
                        <span className='point-principal' />
                    </div>
                    <BallMain/>
                </div>
            </div>
            <ContentIframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F4SMcNumfgCs0zxg4IvNjkB%2FOrion-Ramon-_-Twinfo%3Ftype%3Ddesign%26node-id%3D2943%253A348%26mode%3Ddesign%26t%3DgV3RBnUBUTPzRWUO-1" />
            <Footer />
        </div>
    )
}
