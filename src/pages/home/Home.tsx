import { SocialMedia } from '../../components/social-media';
import './home.scss'

export const Home = () => {

    return (
        <div className='container-home' >
            <div className='content-title'>
                <h1>RAMON MOTA</h1>
                <div className='content-social'>
                    <SocialMedia />
                </div>
            </div>
            <div className='content-float-main'>
                <div className='content-text-main'>
                    <p className='color-principal'>DIRTYING</p>
                    <p className='color-principal'>MY</p>
                    <p className='color-principal'>FINGERS</p>
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
    )
}