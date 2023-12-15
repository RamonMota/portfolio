import { useEffect, useState } from 'react'

export const useSizeScreen = () => {
    
    const [heightScreen, setHeightScreen] = useState(window.innerHeight);
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    
    const hundleHeight = window.innerHeight
    const hundleWidth = window.innerWidth

    const updateHeight = () => setHeightScreen(window.innerHeight)
    const updateWidth = () => setWidthScreen(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', updateHeight)
        window.addEventListener('resize', updateWidth)
        return () => {
            window.removeEventListener('resize', updateHeight)
            window.removeEventListener('resize', updateWidth)
        }
    }, [hundleHeight, hundleWidth])

  return {heightScreen, widthScreen}
}
