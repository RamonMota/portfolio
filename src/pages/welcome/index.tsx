import { useEffect, useState } from 'react'
import './index.scss'
import { useHistory } from 'react-router-dom'
import { Paths } from '../../config/paths/path'

export const Welcome = (props: {
  isOpen: boolean;
  setIsOpen: () => void
}) => {

  const [isShow, setIsShow] = useState(true)

  useEffect(() => {
    if (props.isOpen) {
      setIsShow(true)
      if (props.isOpen) {
        setTimeout(() => {
          // setIsShow(false)
          props.setIsOpen()
          // setTimeout(() => {
          // }, 1800)
        }, 1800)
      }
    }
  }, [props.isOpen])
  return (
    <>
      {
        props.isOpen &&
        <p className={`${isShow ? '' : 'hidden-home'} container-home content-welcome`} >Let’s create!</p>
      }
    </>
  )
}
