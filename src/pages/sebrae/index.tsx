
import { useEffect, useRef, useState } from 'react';
import './index.scss'
import { useHistory } from 'react-router';
import { Paths } from '../../config/paths/path';
import { GridCardSebrae } from '../../components/page-sebrae/grid-cards';
import { IconsLint } from './svg/icons';
import { ContentIframe } from '../../components/page-sebrae/content-iframe/intex';
import { CircleColor } from '../../components/page-sebrae/circle-color';
import { ScrollContent } from '../../components/page-sebrae/scroll-content';
import { GridIcon } from '../../components/page-sebrae/grid-icon';
import { Technology } from '../../components/page-sebrae/ technology';

import frame from './img/Frame.png'
import closeIcon from '../../assets/svg/close.svg'
import frameDevice from '../../assets/img/display-desktop.png'
import screenDevice from '../../assets/img/home-sebrae.png'
import { DeviceScreen } from '../../components/page-sebrae/device-screen';
import { useScreenSize } from '../../hooks/size-screen';

export const Sebrae = () => {
  const history = useHistory()
  const screen = useScreenSize()

  const [isOpenPage, setIsIpenPage] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsIpenPage(true)
    }, 200)
  }, [])

  const handleClose = () => {
    setIsIpenPage(false)
    setTimeout(() => {
      history.push(Paths.HOME)
    }, 300)
  }

  return (
    <>
      <button className={`btn-principal btn-close-page ${isOpenPage ? '' : 'hidden-close'}`} onClick={() => handleClose()}>
        <img src={closeIcon} alt="icon close" />
      </button>
      <div className={`content-page-sebrae  ${isOpenPage ? '' : 'hidden-page'}`}>
        <div className='max-grid'>
          <div className='content-title'>
            <p className='pre-title'>2018</p>
            <h1 className='title-page'>Sebrae events <br />e-commerce</h1>
          </div>
          <div className='content-introduction'>
            <h2>
              The SEBRAE events e-commerce platform focuses on providing solutions for micro and small entrepreneurs in Brazil through courses, lectures, and various events.</h2>
            <p>
              The project's mission is to simplify the interaction between machine and user, aiming to understand user behavior in relation to the system to establish an intuitive balance. To achieve this goal, the platform employs a clean interface, filled with illustrations and icons that serve as visual support in communication with the user. In addition to advanced tools that analyze and interpret user behavior, providing a more refined and efficient experience.
            </p>
          </div>
          <div className='content-technology'>
            <div className='d-flex gap-sm align-items-center'>
              <Technology />
            </div>
          </div>
          <GridCardSebrae />
          <div className='content-brand'>
            <p className='title'>Color scheme</p>
            <p className='description'>
              Color scheme developed based on the brand colors, along with a set of complementary colors, designed to be implemented into the system to maintain visual identity
            </p>
            <div className='grid-colors'>
              <div className='d-flex gap-sm flex-column align-items-center'>
                <p className='color-title'>Brand</p>
                <div className='d-flex gap-sm'>
                  <CircleColor color={'295BAE'} />
                  <CircleColor color={'fff'} />
                </div>
              </div>
              <div className='d-flex gap-sm flex-column align-items-center'>
                <p className='color-title'>Complementary</p>
                <div className='d-flex gap-sm'>
                  <CircleColor color={'2F4358'} />
                  <CircleColor color={'A7D2F6'} />
                  <CircleColor color={'D9D9D9'} />
                </div>
              </div>
              <div className='d-flex gap-sm flex-column align-items-center'>
                <p className='color-title'>Attention</p>
                <div className='d-flex gap-sm'>
                  <CircleColor color={'6FAE1C'} />
                  <CircleColor color={'FD611F'} />
                </div>
              </div>
            </div>
          </div>
          <div className='content-icons'>
            <GridIcon />
            <p>Vector Iconography Development</p>
            <p>
              Incorporate illustrations to enhance user communication, employing SVG format for web optimization without compromising performance. Notably, all icons showcased on this project have been personally designed, adding a distinct touch to the creative work presented
            </p>
            <IconsLint />
          </div>
        </div>
        {screen.isDesktop ?
          <DeviceScreen />
          :
          <></>
        }
        <div className='max-grid'>
          <ContentIframe />
          <div className='content-bottom'>
            <p>need a creative mind?</p>
            <p>Let’s work together</p>
            <a className='btn-principal mx-auto d-flex mt-md'
              href="mailto:ramonmotha@gmail.com"
              target="_blank"
            >Let's talk</a>
          </div>
        </div>
      </div>
    </>
  )
}
