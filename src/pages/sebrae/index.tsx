
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

export const Sebrae = () => {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const phoneContainer = useRef<HTMLDivElement>(null)
  const windowsSize = window.innerHeight
  const phoneContainerCurrentPosition = phoneContainer.current?.getBoundingClientRect().top
  const startAnimationPhone = phoneContainerCurrentPosition && phoneContainerCurrentPosition <= windowsSize

  const history = useHistory()
  const [isOpenPage, setIsIpenPage] = useState<boolean>(false)
  const [scrollY, setScrollY] = useState(0);

  /* eslint-disable no-console */
  //  console.log('scrollHeight', scrollContainer.current?.getBoundingClientRect().top);
  console.log('phoneContainerCurrentPosition', phoneContainerCurrentPosition);
  console.log('windowSize', windowsSize);
  console.log('startAnimationPhone', startAnimationPhone);

  // const handleScroll = () => {
  //   if (scrollContainer) {
  //     setScrollY(scrollContainer.scrollTop);
  //   }
  // };

  // useEffect(() => {

  //   if (scrollContainer) {
  //     scrollContainer.addEventListener('scroll', handleScroll);
  //   }

  //   return () => {
  //     if (scrollContainer) {
  //       scrollContainer.removeEventListener('scroll', handleScroll);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsIpenPage(true)
    }, 200)
  }, [])

  const handleClose = () => {
    setIsIpenPage(false)
    setTimeout(() => {
      history.push(Paths.HOME)
    }, 350)
  }

  return (
    <div ref={scrollContainer} className={`content-page-sebrae  ${isOpenPage ? 'show' : 'hidden'}`}>
      <div className='max-grid'>
        <button className='btn-close-page' onClick={() => handleClose()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11" fill="none">
            <path d="M8.16172 0.765771C8.54832 0.379172 9.17512 0.379172 9.56172 0.765772V0.765772C9.94832 1.15237 9.94832 1.77917 9.56172 2.16577L6.66172 5.06577L9.55806 7.942C9.94628 8.32753 9.94738 8.95511 9.5605 9.34199V9.34199C9.17457 9.72792 8.54886 9.72792 8.16294 9.34199L5.26172 6.44077L2.38428 9.33834C1.99942 9.72588 1.37292 9.72698 0.986719 9.34077V9.34077C0.600514 8.95457 0.601606 8.32807 0.989153 7.94322L3.88672 5.06577L0.985498 2.16455C0.599572 1.77863 0.599572 1.15292 0.985498 0.766992V0.766992C1.37238 0.380114 1.99996 0.381208 2.38549 0.769431L5.26172 3.66577L8.16172 0.765771Z" />
          </svg>
        </button>
        <div className='content-title'>
          <p className='pre-title'>2018</p>
          <h1 className='title-page'>Sebrae events <br />e-commerce</h1>
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
          <p>Iconografia vetorial</p>
          <p>
            Incorporate illustrations to enhance user communication, employing SVG format for web optimization without compromising performance. Notably, all icons showcased on this project have been personally designed, adding a distinct touch to the creative work presented
          </p>
          <IconsLint />
        </div>
        <div ref={phoneContainer}></div>
        <ContentIframe />
        <div className='content-bottom'>
          <p>need a creative mind?</p>
          <p>Let’s work together</p>
        </div>
      </div>
    </div>
  )
}
