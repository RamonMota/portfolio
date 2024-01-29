import { useEffect } from 'react'
import './index.scss'
import { useHistory } from 'react-router-dom'
import { Paths } from '../../config/paths/path'

export const Welcome = () => {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => { history.push(Paths.HOME) }, 1800)
  }, [])
  return (
    <p className='content-welcome'>Hi there!</p>
  )
}
