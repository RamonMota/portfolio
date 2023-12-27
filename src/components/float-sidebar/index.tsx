import { Fragment, useEffect } from 'react';
import { SocialMedia } from '../social-media';
import './index.scss';
import { useScreenSize } from '../../hooks/size-screen';
import { useIdContext } from '../../config/idContext';

export const FloatSidebar = () => {

    const screen = useScreenSize()
    const { id } = useIdContext();

    return (
        <div className={`content-float-sidebar ${id.idName !== '' ? 'open' : ''}`}>
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
