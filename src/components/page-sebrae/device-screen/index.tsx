import React, { useState } from 'react';
import './index.scss';
import screenDevice from '../../../assets/img/home-sebrae.png'
import screenDeviceMobile from '../../../assets/img/home-sebrae-tablet.png'
import { useScreenSize } from '../../../hooks/size-screen';

export const DeviceScreen = () => {
    const screen = useScreenSize()
    const [sliderValue, setSliderValue] = useState<number>(0)
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(event.target.value));
    };

    return (
        <div>
            <div className='content-frame-device'>
                {screen.isMobile ?
                    <svg width="358" height="499" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: 'fit-content' }} />
                    :
                    <svg width="992" height="580" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{ height: 'fit-content' }} />
                }
                <div className='screen-scroll'>
                    {screen.isMobile ?
                        <img src={screenDeviceMobile} alt="screen device"
                            style={{ transform: `translateY(-${sliderValue}%)` }} />
                        :
                        <img src={screenDevice} alt="screen device"
                            style={{ transform: `translateY(-${sliderValue}%)` }} />
                    }
                </div>
            </div>
            <div className='content-range'>
                <p>Scroll interface</p>
                <input
                    type="range"
                    id="rangeSlider"
                    min="0"
                    max={`${screen.isMobile ? '63' : '78'}`}
                    value={sliderValue}
                    onChange={handleSliderChange}
                />
            </div>
        </div>
    );
};
