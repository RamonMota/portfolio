import { Fragment, useEffect } from 'react';
import { SocialMedia } from '../social-media';
import { useScreenSize } from '../../hooks/size-screen';
import './index.scss';

export const FloatSidebar = () => {

    const screen = useScreenSize()

    return (
        <div className='content-float-sidebar'>
            <div className='circle-icon' />
            <p>Cases</p>
            <p>Last works</p>
            {!screen.isMobile &&
                <Fragment>
                    <i className='vertical-line' />
                    <SocialMedia />
                </Fragment>
            }
            <a className='btn-principal'
                href="mailto:ramonmotha@gmail.com"
                target="_blank"
            >Let's talk</a>
        </div>
    )
}
