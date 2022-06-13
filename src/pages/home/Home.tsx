import React, { useState } from 'react';
import * as s from '../style/HomeStyle';
import itsMe from '../../assets/img/I.png'

import IcomoonReact, { iconList } from "icomoon-react"
import listaIcon from "../../assets/img/iconmoon/selection.json"
import './home.scss'

import TextLoop from "react-text-loop";
import { Header } from '../../components/header/header';



function Home() {
    console.log(iconList(listaIcon));
    return (
        <div className='container-home'>
            <img src={itsMe} alt="it's Me!" />
            <span>Hey, i’m</span>
            <h1>Ramon Mota</h1>
            <TextLoop springConfig={{ stiffness: 180, damping: 12 }}>
                <h2>Front End Developer</h2>
                <h2>Illustrator</h2>
                <h2>UI/UX Designer</h2>
            </TextLoop>
        </div>
    )
}

export default Home;