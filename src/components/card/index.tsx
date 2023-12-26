import { Link } from 'react-router-dom'
import './index.scss'
import { useIdContext } from '../../config/idContext'


export const CardItem = (props: { idName: string }) => {
  const idComponent = props.idName
  const { id, setId } = useIdContext();

  const handleInputChange = () => {
    if (id.idName === idComponent) {
      setId('');
    } else {
      setId(props.idName);
    }
  };

  /* eslint-disable no-console */
   console.log('id.idName', id.idName);

  return (
    <div id={idComponent}
      onClick={handleInputChange}
      className={`card content-card-page  ${id.idName === idComponent ? 'expend' : ''}`} >
      <div className='cover-card'>
        {/* <h2>title</h2> */}
      </div>
    </div>
  )
}
