
import { useEffect, useState } from 'react';
import './index.scss'
import { useHistory } from 'react-router';
import { Paths } from '../../config/paths/path';
import { GridCardSebrae } from '../../components/page-sebrae/grid-cards';
import { IconsLint } from './svg/icons';
import { ContentIframe } from '../../components/page-sebrae/content-iframe/intex';
import { CircleColor } from '../../components/page-sebrae/circle-color';

export const Sebrae = () => {
  const history = useHistory()
  const [isOpenPage, setIsIpenPage] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsIpenPage(true)
    }, 100)
  }, [])

  const handleClose = () => {
    setIsIpenPage(false)
    setTimeout(() => {
      history.push(Paths.HOME)
    }, 350)
  }

  return (
    <div className={`content-page-sebrae  ${isOpenPage ? 'show' : 'hidden'}`}>
      <div className='max-grid'>
        <button className='btn-close-page' onClick={() => handleClose()}>
          <i className='icon-Dribble' />
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
                <CircleColor color={'295BAE'}/>
                <CircleColor color={'fff'}/>
              </div>
            </div>
            <div className='d-flex gap-sm flex-column align-items-center'>
              <p className='color-title'>Complementary</p>
              <div className='d-flex gap-sm'>
                <CircleColor color={'2F4358'}/>
                <CircleColor color={'A7D2F6'}/>
                <CircleColor color={'D9D9D9'}/>
              </div>
            </div>
            <div className='d-flex gap-sm flex-column align-items-center'>
              <p className='color-title'>Attention</p>
              <div className='d-flex gap-sm'>
                <CircleColor color={'6FAE1C'}/>
                <CircleColor color={'FD611F'}/>
              </div>
            </div>
          </div>
        </div>
        <div className='content-icons'>
          <p>Iconografia vetorial</p>
          <p>
            Incorporate illustrations to enhance user communication, employing SVG format for web optimization without compromising performance. Notably, all icons showcased on this project have been personally designed, adding a distinct touch to the creative work presented
          </p>
          <IconsLint />
        </div>
        <ContentIframe />
        <div className='content-bottom'>
          <p>need a creative mind?</p>
          <p>Let’s work together</p>
        </div>
      </div>
    </div>
  )
}
