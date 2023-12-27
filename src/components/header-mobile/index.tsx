import { SocialMedia } from "../social-media"
import './index.scss'

export const HeaderMobile = () => {
    return (
        <div className='content-header'>
            <h1>RAMON <b>MOTA</b></h1>
            <div className='content-social'>
                <SocialMedia />
            </div>
        </div>
    )
}
