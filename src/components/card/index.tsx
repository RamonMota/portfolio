import { useHistory, useLocation } from 'react-router-dom'
import './index.scss'
import { Tag } from '../tag/tag'
import { useState } from 'react'


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
    <a onClick={
      props.isLocked ? handleLockCard : props.handleChangePath} className='content-card-page'>
      <div className='content-banner z-1'>
        <div className='d-flex gap-xs flex-column'>
          <h3>{props.name}</h3>
        </div>
      {/* <img className={`img-bg`} src={props.image} alt="banner" /> */}
      </div>
      {props.isLocked &&
          <div className={`content-locked ${lockOpen ? '' : 'hidden'}`}>
            <img src='https://em-content.zobj.net/source/microsoft-teams/363/call-me-hand_1f919.png' alt="banner" />
            <p>In progress</p>
          </div>
      }
      <img className={`img-bg ${lockOpen ? 'hidden' : ''}`} src={props.image} alt="banner" />
    </a>
  )
}