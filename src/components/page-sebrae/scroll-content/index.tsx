import { useState, useEffect } from 'react';
import './index.scss';

export const ScrollContent = () => {
    const [scrollY, setScrollY] = useState(0);
    const scrollContainer = document.getElementById('scrollId');
    
    const handleScroll = () => {
        if (scrollContainer) {
            setScrollY(scrollContainer.scrollTop);
        }
    };
    
    useEffect(() => {
        
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    
    const scale = 1 + scrollY / window.innerHeight;

    return (
        <div className="container">
            <div
                className="box"
                style={{
                    transform: `scale(${scale * 10})`,
                }}
            />
        </div>
    )
}
