import { useHistory, useLocation } from 'react-router-dom'
import './index.scss'


export const CardItem = (props: {
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
      <div className='content-banner'>
        <h3>{props.name}</h3>
        <img src={props.image} alt="banner" />
      </div>
    </a>
  )
}