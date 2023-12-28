
import { useEffect, useState } from 'react';
import { useIdContext } from '../../config/idContext';
import './index.scss'
import Spline from '@splinetool/react-spline';

export const Sebrae = () => {
  const { id, setId } = useIdContext();
  const [isOpenPage, setIsIpenPage] = useState<boolean>(false)

  useEffect(() => {
    if (id.idName !== '') {
      setTimeout(() => {
        setIsIpenPage(true)
      }, 100)
    } else {
      setIsIpenPage(false)
    }
  }, [id.idName])

  return (
    <div className={`content-page-sebrae  ${isOpenPage ? 'show' : 'hidden'}`}>
      <button className='btn-close-page' onClick={() => setId('')}>
        <i className='icon-Dribble' />
      </button>
      <div className='banner-top' />
      <Spline className='cover-phone' scene="https://prod.spline.design/mQhYuzAgZH1ZLbci/scene.splinecode" />
      <h1 className='title-page'>Sistema de eventos e ecommerce Sebrae</h1>
    </div>
  )
}
