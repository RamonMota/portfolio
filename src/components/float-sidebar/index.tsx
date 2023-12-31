import { Fragment, useEffect } from 'react';
import { SocialMedia } from '../social-media';
import './index.scss';
import { useScreenSize } from '../../hooks/size-screen';
import { PathsModal } from '../../config/paths/path';
import { useLocation } from 'react-router';

export const FloatSidebar = () => {

    const screen = useScreenSize()
    const location = useLocation()
    const currentPath = location.pathname;
    const scaleFloat = Object.values(PathsModal).includes(currentPath as PathsModal)

    return (
        <div className={`content-float-sidebar ${scaleFloat ? 'open' : ''}`}>
            <div className='circle-icon' />
            <p>Cases</p>
            <p>Last works</p>
            {!screen.isMobile &&
                <Fragment>
                    <i className='vertical-line' />
                    <SocialMedia />
                </Fragment>
            }
            <button className='btn-principal'>Let's talk</button>
        </div>
    )
}
