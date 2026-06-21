
import { Fragment, useEffect, useState } from 'react';
import { Paths, PathsPages } from '../../../config/paths/path';
import { FloatSidebar } from '../float-sidebar';
import { useRoute } from '../../../context/RouteContext';
import { useHandleChangePage } from '../../../config/usehandleChangePage';

export const ContentPage = (props: { children?: any | null }) => {
  const handleChangePage = useHandleChangePage()
  const { actualRoute, interval } = useRoute();
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
      <div className={`w-full transition-all duration-600 ease-[cubic-bezier(.6,-.5,.4,1.5)] ${isOpenContent ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0!'}`}>
        {props.children}
      </div>
    </Fragment>
  )
}
