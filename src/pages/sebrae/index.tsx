
import { useEffect, useState } from 'react';
import './index.scss'
import { useHistory } from 'react-router';
import { Paths } from '../../config/paths/path';
import { GridCardSebrae } from '../../components/page-sebrae/grid-cards';
import { IconsLint } from './svg/icons';
import { ContentIframe } from '../../components/page-sebrae/content-iframe/intex';
import { CircleColor } from '../../components/page-sebrae/circle-color';
import { GridIcon } from '../../components/page-sebrae/grid-icon';
import { Technology } from '../../components/page-sebrae/ technology';
import { DeviceScreen } from '../../components/page-sebrae/device-screen';
import { Footer } from '../../components/footer';

export const Sebrae = () => {
  const history = useHistory()

  const [isOpenPage, setIsOpenPage] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsOpenPage(true)
    }, 200)
  }, [])

  const handleChangePage = () => {
    setIsOpenPage(false)
    setTimeout(() => {
      history.push(Paths.HOME)
    }, 300)
  }

  return (
    <>
      <button className={`btn-principal btn-close-page ${isOpenPage ? '' : 'hidden-close'}`} onClick={handleChangePage}>
        <i className='icon-close' />
      </button>
      <div className={`content-page-sebrae  ${isOpenPage ? '' : 'hidden-page'}`}>
        <div className='max-grid'>
          <div className='content-title'>
            <h1 className='title-page'>E-commerce Sebrae events</h1>
            <div className='content-introduction'>
              <h2>
                Revamping with a mobile first approach, our UI enhancements were a game changer for mobile usability. Introducing strategic breathing spaces didn't just add comfort but streamlined platform accessibility. These key results signify a leap in user experience design, blending professionalism with personality
              </h2>
              <span className='point-principal'/>
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
          <DeviceScreen />
          <ContentIframe />
          <Footer />
        </div>
      </div>
    </>
  )
}
