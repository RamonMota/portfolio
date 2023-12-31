
import { useEffect, useState } from 'react';
import './index.scss'
import { Astronaut } from './svg/astronaut';
import { useHistory } from 'react-router';
import { Paths } from '../../config/paths/path';

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
    }, 100)
  }

  return (
    <div className={`content-page-sebrae  ${isOpenPage ? 'show' : 'hidden'}`}>
      <button className='btn-close-page' onClick={() => handleClose()}>
        <i className='icon-Dribble' />
      </button>
      <div className='banner-top' />
      <h1 className='title-page'>Sistema de eventos e ecommerce Sebrae</h1>

      <div>
        <Astronaut />
      </div>
    </div>
  )
}
