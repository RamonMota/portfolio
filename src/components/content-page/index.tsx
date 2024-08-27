
import { Fragment, useEffect, useState } from 'react';
import './index.scss'
import { useHistory } from 'react-router';
import { Paths } from '../../config/paths/path';
import { FloatSidebar } from '../../components/float-sidebar';

export const ContentPage = (props: { children?: any | null }) => {
  const history = useHistory()

  const [isOpenPage, setIsOpenPage] = useState<boolean>(false)
  const [isOpenSide, setIsOpenSide] = useState<boolean>(false)

  const handleBackHome = () => {
    setIsOpenSide(false)
    setIsOpenPage(false)
    setTimeout(() => {
      history.push(Paths.HOME)
    }, 400)
  }
  useEffect(() => {
    setTimeout(() => {
      setIsOpenSide(true)
      setTimeout(() => {
        setIsOpenPage(true)
      }, 300)
    }, 1000)
  }, [])

  return (
    <Fragment>
      <FloatSidebar isOpen={isOpenSide} setIsOpen={handleBackHome} />
      {!isOpenPage && <p className='load-title'>LOADING</p>}
      <div className={`content-page  ${isOpenPage ? '' : 'hidden-page'}`}>
        {props.children}
      </div>
    </Fragment>
  )
}
