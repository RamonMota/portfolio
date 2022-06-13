import React from 'react'

import IcomoonReact from 'icomoon-react';
import listaIcon from "../../assets/img/iconmoon/selection.json"

import './footer.scss';

export const Footer = () => {
  return (
    <footer className='container-footer'>
      <a target="_blank" href="https://www.linkedin.com/in/ramon-mota-3b4b9413a/">
          <IcomoonReact iconSet={listaIcon} size={100} icon="linkedin" />
      </a>
      <a target="_blank" href="#">
          <IcomoonReact iconSet={listaIcon} size={100} icon="Facebook" />
      </a>
      <a target="_blank" href="https://www.instagram.com/ramon_mota117/">
          <IcomoonReact iconSet={listaIcon} size={100} icon="Instagram" />
      </a>
      <a target="_blank" href="https://dribbble.com/ramonmota">
          <IcomoonReact iconSet={listaIcon} size={100} icon="Dribble" />
      </a>
    </footer>
  )
}
