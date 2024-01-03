
import { useEffect, useState } from 'react';
import './index.scss'
import { useHistory } from 'react-router';
import { Paths } from '../../config/paths/path';
import { GridCardSebrae } from '../../components/page-sebrae/grid-cards';

export const Sebrae = () => {
  const history = useHistory()
  const [isOpenPage, setIsIpenPage] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsIpenPage(true)
    }, 100)
  }, [])

  const handleClose = () => {
    setIsIpenPage(false)
    setTimeout(() => {
      history.push(Paths.HOME)
    }, 350)
  }

  return (
    <div className={`content-page-sebrae  ${isOpenPage ? 'show' : 'hidden'}`}>
      <div className='max-grid'>
        <button className='btn-close-page' onClick={() => handleClose()}>
          <i className='icon-Dribble' />
        </button>
        <div className='content-title'>
          <p className='pre-title'>2018</p>
          <h1 className='title-page'>Sebrae events <br />e-commerce</h1>
        </div>
        <GridCardSebrae />
        {/* <iframe
          className='iframe-figma'
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FG5LP5npZCmW2gBvDFcVrec%2FE-commerce-Sebrae%3Ftype%3Ddesign%26node-id%3D1408%253A96%26mode%3Ddesign%26t%3DkgUDVQKdT4kZFEuC-1" allowFullScreen /> */}
      </div>
    </div>
  )
}
