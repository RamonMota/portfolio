import React from 'react'

import IcomoonReact from 'icomoon-react';
import listaIcon from "../../assets/img/iconmoon/selection.json"

import './footer-social.scss';
import { useSizeScreen } from '../../hooks/height-screen';

export const FooterSocial = () => {

  const screenSize = useSizeScreen()

  const goToCases = () => window.scrollTo({ top: screenSize.heightScreen, behavior: 'smooth' })

  return (
    <footer className='container-footer'>
      <div>
        <a target="_blank" href="https://www.linkedin.com/in/ramon-mota-3b4b9413a/">
          <i className='icon-footer icon-linkedin' />
        </a>
        <a target="_blank" href="#">
          <i className='icon-footer icon-Facebook' />
        </a>
        <a target="_blank" href="https://www.instagram.com/ramon_mota117/">
          <i className='icon-footer icon-Instagram' />
        </a>
        <a target="_blank" href="https://dribbble.com/ramonmota">
          <i className='icon-footer icon-Dribble' />
        </a>
      </div>
      {screenSize.widthScreen > 600 && <a onClick={goToCases} className='btn-case'>Cases</a>}
    </footer>
  )
}
