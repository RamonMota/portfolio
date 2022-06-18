import React, { useState, useEffect } from 'react';
import TextLoop from "react-text-loop";

import IcomoonReact, { iconList } from "icomoon-react"
import listaIcon from "../../assets/img/iconmoon/selection.json"

import itsMe from '../../assets/img/I.png'
import './home.scss'
import { CardItem } from '../../components/card/card-item';
import img from '../../assets/img/imgTest.jpg'
import img2 from '../../assets/img/imgTest2.jpg'
import { FooterSocial } from '../../components/footer-social/footer-social';
import { useSizeScreen } from '../../hooks/height-screen';

function Home() {
    const screenSize = useSizeScreen()

    return (
        <div className='container-home' >
           <div className='container-full-height' style={{height: screenSize.heightScreen}}>
                <div className='box-info'>
                    <img src={itsMe} alt="it's Me!" />
                    <span>Hey, i’m</span>
                    <h1>Ramon Mota</h1>
                    <TextLoop springConfig={{ stiffness: 180, damping: 12 }}>
                        <h2>Front End Developer</h2>
                        <h2>Illustrator</h2>
                        <h2>UI/UX Designer</h2>
                    </TextLoop>
                </div>
           </div>
           <div className=''>
                <h2 className='title-section'>Case studies</h2>
                <span className='subtitle-section'>Selected projects</span>
                <div className='container-cards'>
                    <CardItem 
                    uiux={true} 
                    illustrator={true} 
                    frontend={false} 
                    new={true} 
                    date={'2020'} 
                    name={'Event sistem mi facilisis in elit'} 
                    image={img2}
                    router={'/'}/>

                    <CardItem 
                    uiux={true} 
                    illustrator={true} 
                    frontend={true} 
                    new={false} 
                    date={'2018 - Today'} 
                    name={'E-commerce sebrae dolor sit amet consectetur adipiscing elitPP'} 
                    image={img}
                    router={'/'}/>
                </div>
           </div>
           <FooterSocial/>
        </div>
    )
}

export default Home;