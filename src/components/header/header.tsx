import React from 'react'
import { Link } from 'react-router-dom';
import { DrawerContact } from '../drawer-contact/drawer-contact';
import './header.scss';

export const Header = () => {
  const resume = 'https://www.figma.com/proto/45UzMsCHRxTkaIrTc14K2U/Resume-Ramon?page-id=0%3A1&node-id=105%3A29&viewport=-175%2C358%2C0.46&scaling=min-zoom'
  return (
    <header className='container-header'>
        <a className='btn-txt' href='/'>voltar</a>
        <div>
          <a className='btn-txt' href={resume} target="_blank">resume</a>
          <a className='btn-txt' href="#">About me</a>
          <a className='btn' href='/'>Contact</a>
          <DrawerContact/>
        </div>
    </header>
  )
}

