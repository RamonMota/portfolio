
import { Fragment, useEffect, useState } from 'react';
import './index.scss'
import { useHistory, useLocation } from 'react-router';
import { Paths, PathsPages } from '../../config/paths/path';
import { FloatSidebar } from '../../components/float-sidebar';
import { Loader } from '../loader';
import { useRoute } from '../../context/RouteContext';

export const ContentPage = (props: { children?: any | null }) => {
  const history = useHistory()
  const { actualRoute, setRoute, interval } = useRoute();
  const pathsListCases = Object.values(PathsPages).includes(actualRoute as PathsPages);

  const [isOpenFloatMenu, setIsOpenFloatMenu] = useState<boolean>(false)
  const [isOpenContent, setIsOpenContent] = useState<boolean>(false)
  const [isOpenLoader, setIsOpenLoader] = useState<boolean>(false)

  console.log(`actualRoute ${actualRoute}`, pathsListCases)

  const handleBackHome = () => {
    setRoute(Paths.HOME)
    setTimeout(() => {
      history.push(Paths.HOME)
    }, interval / 2)
    setRoute(Paths.HOME)
  }

  // Loader
  useEffect(() => {
    if (actualRoute) {
      setTimeout(() => {
        setIsOpenLoader(true)
      }, interval / 3)
    } else {
      setTimeout(() => {
        setIsOpenLoader(false)
      }, interval + 500)
    }
  }, [actualRoute])

  // FloatMenu
  useEffect(() => {
    
    if (pathsListCases) {
      setTimeout(() => {
        setIsOpenFloatMenu(true)
      }, interval)
    } else {
      setIsOpenFloatMenu(false)
    }
  }, [actualRoute])

  // OpenContent
  useEffect(() => {
    if (pathsListCases) {
      setTimeout(() => {
        setIsOpenContent(true)
      }, interval / 2)
    } else {
      setTimeout(() => {
        setIsOpenContent(false)
      }, interval / 3)
    }
  }, [actualRoute])

  return (
    <Fragment>
      <FloatSidebar setIsOpen={handleBackHome} isOpen={isOpenFloatMenu} />
      <Loader isLoading={isOpenLoader} />
      <div className={`content-page ${isOpenContent ? '' : 'hidden-page'}`}>
        {props.children}
      </div>
    </Fragment>
  )
}
