import { Fragment } from 'react';
import { SocialMedia } from '../social-media';
import './index.scss';
import { useScreenSize } from '../../hooks/size-screen';

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
            <button className='btn-principal'>Let's talk</button>
        </div>
    )
}
