import './home.scss'
import { useSizeScreen } from '../../hooks/height-screen';
import { useMoveScrollWindowsDown } from '../../hooks/move-scroll';

export const Home = () => {

    const screenSize = useSizeScreen()
    const goToCases = () => window.scrollTo({ top: screenSize.heightScreen, behavior: 'smooth' })

    const opacityCase = useMoveScrollWindowsDown(150)
    const opacityContent = useMoveScrollWindowsDown(300)

    return (
        <div className='container-home' >
            HOME
        </div>
    )
}