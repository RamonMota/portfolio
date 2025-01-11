
import { Fragment, useEffect, useState } from 'react';
import './index.scss'
import { Paths, PathsPages } from '../../config/paths/path';
import { FloatSidebar } from '../../components/float-sidebar';
import { useRoute } from '../../context/RouteContext';
import { useHandleChangePage } from '../../config/usehandleChangePage';

export const ContentPage = (props: { children?: any | null }) => {
  const handleChangePage = useHandleChangePage()
  const { actualRoute, setRoute, interval } = useRoute();
  const pathsListCases = Object.values(PathsPages).includes(actualRoute as PathsPages);
  const [isOpenFloatMenu, setIsOpenFloatMenu] = useState<boolean>(false)
  const [isOpenContent, setIsOpenContent] = useState<boolean>(false)

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
    if (isOpenContent) {
      setIsOpenContent(false)
    }
    setTimeout(() => {
      setIsOpenContent(true)
    }, interval / 2)

  }, [actualRoute])

  return (
    <Fragment>
      <FloatSidebar setIsOpen={() => handleChangePage(Paths.HOME)} isOpen={isOpenFloatMenu} />
      <div className={`content-page ${isOpenContent ? '' : 'hidden-page'}`}>
        {props.children}
      </div>
    </Fragment>
  )
}
