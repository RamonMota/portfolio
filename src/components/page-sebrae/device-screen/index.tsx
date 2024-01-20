import React, { useState, useEffect, useRef } from 'react';
import './index.scss';
import frameHorizontalDevice from '../../../assets/img/bezel-horizontal-min.png'
import frameVerticalDevice from '../../../assets/img/bezel-vertical-min.png'
import screenDevice from '../../../assets/img/home-sebrae.png'
import { useWindowSize } from '../../../hooks/size-window';
import { useScreenSize } from '../../../hooks/size-screen';

export const DeviceScreen = () => {
    // const { height, width } = useWindowSize()
    const screen = useScreenSize()
    const [sliderValue, setSliderValue] = useState<number>(0)
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(event.target.value));
    };

    const imagemRef = useRef<any>(null);
    const [heightDevice, setHeightDevice] = useState<number>(0);
    const [widthDevice, setWidthDevice] = useState<number>(0);

    // useEffect(() => {
    //     const obterAlturaDaImagem = () => {
    //         if (imagemRef.current && imagemRef.current.complete) {
    //             setHeightDevice(imagemRef.current.height);
    //             setWidthDevice(imagemRef.current.width);
    //         } else {
    //             imagemRef.current.onload = () => setHeightDevice(imagemRef.current.height);
    //             imagemRef.current.onload = () => setWidthDevice(imagemRef.current.width);
    //         }
    //     };

    //     obterAlturaDaImagem();

    //     return () => {
    //         if (imagemRef.current) {
    //             imagemRef.current.onload = null;
    //         }
    //     };
    // }, []);
    return (
        <div>
            <div className='content-frame-device'>
                {screen.isMobile ?
                    <img className={`device-scroll`} src={frameVerticalDevice} alt="frame device" />
                    :
                    <img className={`device-scroll`} src={frameHorizontalDevice} alt="frame device" />
                }
                <div className='screen-scroll'>
                    <img src={screenDevice} alt="screen device"
                        style={{ transform: `translateY(-${sliderValue}%)` }} />
                </div>
            </div>
            <div className='content-range'>
                <p>Scroll interface</p>
                <input
                    type="range"
                    id="rangeSlider"
                    min="0"
                    max={`${screen.isMobile ? '35' : '73'}`}
                    value={sliderValue}
                    onChange={handleSliderChange}
                />
    
            </div>
        </div>
    );
};
