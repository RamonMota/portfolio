import React, { useState, useEffect, useRef } from 'react';
import './index.scss';
import frameDevice from '../../../assets/img/display-desktop.png'
import screenDevice from '../../../assets/img/home-sebrae.png'
import { useWindowSize } from '../../../hooks/size-window';

export const DeviceScreen = () => {
    const { height } = useWindowSize()

    const imagemRef = useRef<any>(null);
    const [heightDevice, setHeightDevice] = useState<number>(0);

    useEffect(() => {
        const obterAlturaDaImagem = () => {
            if (imagemRef.current && imagemRef.current.complete) {
                setHeightDevice(imagemRef.current.height);
            } else {
                imagemRef.current.onload = () => setHeightDevice(imagemRef.current.height);
            }
        };

        obterAlturaDaImagem();

        return () => {
            if (imagemRef.current) {
                imagemRef.current.onload = null;
            }
        };
    }, []);

    return (
        <div className='content-device'>
            <div className=''>
                <div className='content-frame-device'
                    style={{ height: `${height}px` }}>
                    <div className='top-fake' style={{ height: `${(height - heightDevice) / 2 + 8}px` }} />
                    <img
                        ref={imagemRef}
                        className='device-scroll'
                        src={frameDevice}
                        alt="frame device"
                    />
                    <div className='bottom-fake' style={{ height: `${(height - heightDevice) / 2 + 8}px` }} />
                </div>
                <img className='screen-scroll'
                    src={screenDevice}
                    alt="screen device"
                    style={{ marginTop: `-${((height - heightDevice) / 2) + heightDevice}px`, paddingBottom: `${(height - heightDevice) / 2 + 2}px` }}
                />
            </div>
        </div>
    );
};
