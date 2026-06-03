import { useEffect, useRef } from 'react';
import './index.scss'

export const CustomCursor = () => {
  const cursorRef = useRef<any>();

  useEffect(() => {
    const moveCursor = (e: any) => {
      const x = e.clientX;
      const y = e.clientY;
      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;
      cursorRef.current.style.transform = `translate(-50%, -50%)`;
    };

    document.addEventListener('mousemove', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  //LINK: https://codepen.io/Qualley/pen/YzdzaOj?editors=1100

  return (
    <div className='custom-cursos' ref={cursorRef} />
  )
}
