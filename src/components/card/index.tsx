import { Link, useHistory } from 'react-router-dom'
import './index.scss'
import { useIdContext } from '../../config/idContext'
import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Paths } from '../../config/paths/path'


export const CardItem = (props: {
  idName: string
  link: string
}) => {
  const history = useHistory()
  const idComponent = props.idName
  const { id, setId } = useIdContext();
  const isOpen = id.idName === idComponent

  const handleInputChange = () => {
    if (isOpen) {
      setId('');
    } else {
      setId(props.idName);
    }
  };

  useEffect(() => {
    if (id.idName === props.idName) {
      history.push(props.link)
    } else if (id.idName === '') {
      history.push(Paths.HOME)
    }

  }, [id.idName])

  return (
    <div id={idComponent}
      onClick={handleInputChange}
      className={`content-card-page  
        ${isOpen ? 'expend z-99' : 'z-1'}
        `} >
    </div>
  )
}
