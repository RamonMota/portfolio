import './index.scss' 
import { useState } from 'react'
import handWait from '../../assets/img/call-me-hand.png'


export const CardItem = (props: {
  isLocked?: boolean | false
  name?: string
  image?: string
  handleChangePath?: () => void
}) => {

  const [lockOpen, setLockOpen] = useState(false)

  const handleLockCard = () => {
    if (!lockOpen) {
      setLockOpen(true)
      setTimeout(() => {
        setLockOpen(false)
      }, 2000)
    }
  }

  return (
    <a onClick={props.isLocked ? handleLockCard : props.handleChangePath} className='content-card-page'>
      <div className='content-banner z-1'>
        <div className='d-flex gap-xs flex-column'>
          <h3>{props.name}</h3>
        </div>
      </div>
      {props.isLocked &&
        <div className={`content-locked ${lockOpen ? '' : 'hidden'}`}>
          <img src={handWait} alt="banner" />
          <p>In progress</p>
        </div>
      }
      {props.image &&
        <img className={`img-bg ${lockOpen ? 'hidden' : ''}`} src={props.image} alt="banner" />
      }
    </a>
  )
}