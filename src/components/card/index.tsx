import { useHistory, useLocation } from 'react-router-dom'
import './index.scss'
import { Tag } from '../tag/tag'


export const CardItem = (props: {
  isLocked?: boolean | false
  link?: string | null
  name?: string
  image?: string
  handleChangePath?: () => void
}) => {

  const history = useHistory()
  const location = useLocation()
  const currentPath = location.hash.substring(1);
  const isOpen = props.link === currentPath

  const handleInputChange = () => {
    if (props.link) {
      if (props.handleChangePath) {
        props.handleChangePath();
      }

      if (!isOpen) {
        setTimeout(() => props.link && history.push(props.link), 400)
      }
    }
  };

  return (
    <a onClick={handleInputChange} className='content-card-page'>
      <div className='content-banner z-1'>
        <p className='color-white'>2018</p>
        <div className='d-flex gap-xs flex-column'>
          <div className='d-flex gap-xs'>
            <Tag name='UI/UX' />
            <Tag name='Front end' />
          </div>
          <h3>{props.name}</h3>
        </div>
      </div>
      <img src={props.image} alt="banner" />
    </a>
  )
}