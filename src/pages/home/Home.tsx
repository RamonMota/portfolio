import { useScreenSize } from '../../hooks/size-screen';
import { CardItem } from '../../components/card';
import { HeaderMobile } from '../../components/header-mobile';
import { PathsModal } from '../../config/paths/path';
import './home.scss'
import { useLocation } from 'react-router';

export const Home = () => {

    const screen = useScreenSize()
    const location = useLocation()
    const currentPath = location.pathname;
    const scaleHome = Object.values(PathsModal).includes(currentPath as PathsModal)

    return (
        <div className='container-home' style={scaleHome ? { transform: 'scale(0.8)' } : undefined}>
            <div className='content-top'>
                {screen.isMobile &&
                    <HeaderMobile />
                }
                <div className='content-float-main'>
                    <div className='content-text-main'>
                        {!screen.isMobile &&
                            <div className='content-title'>
                                <h1>RAMON <b>MOTA</b></h1>
                            </div>
                        }
                        <p className='color-principal'>DIRTYING</p>
                        <p className='color-principal'>MY FINGERS</p>
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
            <div className='content-list-card'>
                <CardItem idName='sebrae'
                    link={PathsModal.SEBRAE} />
            </div>

        </div >
    )
}