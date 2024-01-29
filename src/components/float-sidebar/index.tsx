import { useEffect, useState } from 'react';
import './index.scss';
import { Paths } from '../../config/paths/path';
import { useLocation } from 'react-router';

export const FloatSidebar = (props: {
    setHome: () => void
}) => {
    const location = useLocation();
    const currentPath = location?.hash.substring(1);
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
    const isHome = currentPath === Paths.HOME || currentPath === Paths.HOME_REDIRECT
    const isWelcome = currentPath === Paths.WELCOME

    useEffect(() => {
        if (!isHome && !isWelcome) {
            setTimeout(() => setIsOpenSidebar(true), 300);
        } else {
            setTimeout(() => setIsOpenSidebar(false), 100);
        }
    }, [isHome]);

    return (
        <div className={`content-float-sidebar ${isOpenSidebar ? 'show-up' : 'hidden-down'}`}>
            <button onClick={props.setHome} className='btn-principal btn-close-flout'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 10" fill="none">
                    <path d="M0.997452 5.76576C0.605622 5.37294 0.608489 4.73623 1.00384 4.34696L1.68662 3.6747L4.56232 0.771626C4.94786 0.382425 5.57649 0.381329 5.96337 0.769185V0.769185C6.34889 1.15567 6.3478 1.7816 5.96094 2.16674L3.06162 5.05314L5.96459 7.96339C6.34983 8.34959 6.34983 8.97473 5.96459 9.36094V9.36094C5.57703 9.74947 4.94731 9.74837 4.56111 9.35849L1.68662 6.45665L0.997452 5.76576Z" fill="#1C1B1F" />
                </svg>
            </button>
            <i className='vertical-line' />
            <a className='btn-principal'
                href="mailto:ramonmotha@gmail.com"
                target="_blank"
            >Let's talk</a>
        </div>
    )
}
