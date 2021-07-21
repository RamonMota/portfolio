import React, { useState } from 'react';
import Introdution from '../Introdution/Introdution.js'
import * as s from './style/HomeStyle';
import itsMe from '../../assets/img/I.png'

import IcomoonReact, { iconList } from "icomoon-react"
import listaIcon from "../../assets/img/iconmoon/selection.json"

import linkedin from "../../assets/img/iconmoon/selection.json"
import Facebook from "../../assets/img/iconmoon/selection.json"
import Instagram from "../../assets/img/iconmoon/selection.json"
import Dribble from "../../assets/img/iconmoon/selection.json"
import heart from "../../assets/img/iconmoon/selection.json"

import TextLoop from "react-text-loop";



function Home() {
    // console.log(iconList(listaIcon));
    const [exibirInfo, setExibirInfo] = useState(0);


    const informacaoAtual = [
        <s.ConteudoPrincipal>
            <img src={itsMe} alt="it's Me!" />
            <span>Hey, i’m</span>
            <h1>Ramon Mota</h1>
            <TextLoop springConfig={{ stiffness: 180, damping: 12 }}>
                <h2>Front End Developer</h2>
                <h2>Illustrator</h2>
                <h2>UI/UX Designer</h2>
            </TextLoop>
        </s.ConteudoPrincipal>,

        <s.ConteudoPrincipal>
            <h1>Isso é apenas um teste</h1>
        </s.ConteudoPrincipal>
    ]

    return (
        <s.ContaunerPrincipal>
            <Introdution/>
            <s.Header>
                <s.AreaTop>
                    <s.BtnTxt href="#">About me</s.BtnTxt>
                    <s.Btn href="#">Contact</s.Btn>
                </s.AreaTop>
            </s.Header>
            <s.Main>

                {informacaoAtual [exibirInfo]}

            </s.Main>
            <s.FooterLateral>
                <p>Power by myself <IcomoonReact iconSet={heart} size={100} icon="heart" /></p>
            </s.FooterLateral>

            <s.FooterSOcial>
                <a target="_blank" href="https://www.linkedin.com/in/ramon-mota-3b4b9413a/">
                    <IcomoonReact iconSet={linkedin} size={100} icon="linkedin" />
                </a>
                <a target="_blank" href="#">
                    <IcomoonReact iconSet={Facebook} size={100} icon="Facebook" />
                </a>
                <a target="_blank" href="https://www.instagram.com/ramon_mota117/">
                    <IcomoonReact iconSet={Instagram} size={100} icon="Instagram" />
                </a>
                <a target="_blank" href="https://dribbble.com/ramonmota">
                    <IcomoonReact iconSet={Dribble} size={100} icon="Dribble" />
                </a>
            </s.FooterSOcial>
            
        </s.ContaunerPrincipal>
    )
}

export default Home;