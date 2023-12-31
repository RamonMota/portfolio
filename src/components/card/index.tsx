import { useHistory, useLocation } from 'react-router-dom'
import './index.scss'


export const CardItem = (props: {
  idName: string
  link: string
}) => {
  const history = useHistory()
  const location = useLocation()
  const currentPath = location.pathname;
  const idComponent = props.idName
  const isOpen = props.link === currentPath

  const handleInputChange = () => {
    if (!isOpen) {
      history.push(props.link)
    }
  };

  return (
    <div id={idComponent}
      onClick={handleInputChange}
      className={`content-card-page  
        ${isOpen ? 'expend' : 'z-1'}
        `} >
    </div>
  )
}
