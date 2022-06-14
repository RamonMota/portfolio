import React, { useState, useEffect } from 'react';
import TextLoop from "react-text-loop";

import IcomoonReact, { iconList } from "icomoon-react"
import listaIcon from "../../assets/img/iconmoon/selection.json"

import itsMe from '../../assets/img/I.png'
import './home.scss'
import { CardItem } from '../../components/card/card-item';

function Home() {
    const [height, setHeight] = useState(window.innerHeight);
    
    const hundleHeight = window.innerHeight
    const updateHeight = () => setHeight(window.innerHeight)

    useEffect(() => {
        window.addEventListener('resize', updateHeight)
        return () => {
            window.removeEventListener('resize', updateHeight)
        }
  
    }, [hundleHeight]);

    return (
        <div className='container-home' >
           <div className='container-full-height' style={{height: height}}>
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
                <div>
                    <CardItem/>
                </div>
           </div>
        </div>
    )
}

export default Home;