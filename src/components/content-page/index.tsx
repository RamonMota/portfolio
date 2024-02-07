
import { Fragment, useEffect, useState } from 'react';
import './index.scss'
import { useHistory } from 'react-router';
import { Paths } from '../../config/paths/path';
import { GridCardSebrae } from '../../components/page-sebrae/grid-cards';
import { ContentIframe } from '../../components/page-sebrae/content-iframe/intex';
import { CircleColor } from '../../components/page-sebrae/circle-color';
import { GridIcon } from '../../components/page-sebrae/grid-icon';
import { DeviceScreen } from '../../components/page-sebrae/device-screen';
import { Footer } from '../../components/footer';
import { FloatSidebar } from '../../components/float-sidebar';

export const ContentPage = (props: {children?: any | null}) => {
  const history = useHistory()

  const [isOpenPage, setIsOpenPage] = useState<boolean>(false)
  const [isOpenSide, setIsOpenSide] = useState<boolean>(false)

  useEffect(() => {
    setIsOpenSide(true)
    setTimeout(() => {
      setIsOpenPage(true)
    }, 200)
  }, [])

  const handleBackHome = () => {
    setIsOpenSide(false)
    setIsOpenPage(false)
    setTimeout(() => {
      history.push(Paths.HOME)
    }, 400)
  }

  return (
    <Fragment>
      <FloatSidebar isOpen={isOpenSide} setIsOpen={handleBackHome} />
      <div className={`content-page  ${isOpenPage ? '' : 'hidden-page'}`}>
        {props.children}
      </div>
    </Fragment>
  )
}
