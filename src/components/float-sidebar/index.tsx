import { Fragment } from 'react';
import { useSizeScreen } from '../../hooks/height-screen';
import { SocialMedia } from '../social-media';
import './index.scss';

export const FloatSidebar = () => {

    const { widthScreen } = useSizeScreen()

    return (
        <div className='content-float-sidebar'>
            <div className='circle-icon' />
            <p>Cases</p>
            <p>Last works</p>
            {widthScreen > 599 &&
                <Fragment>
                    <i className='vertical-line' />
                    <SocialMedia />
                </Fragment>
            }
            <button className='btn-principal'>Let's talk</button>
        </div>
    )
}
