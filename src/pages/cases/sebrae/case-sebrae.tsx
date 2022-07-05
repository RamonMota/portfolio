import React from 'react'
import { useSizeScreen } from '../../../hooks/height-screen'

import './case-sebrae.scss'

export const CaseSebrae = () => {
    const screenSize = useSizeScreen()
    
  return (
    <div>
        <h1 className='title-case'>Title</h1>
        <iframe  
        width='800px' 
        height='600px'
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FG5LP5npZCmW2gBvDFcVrec%2FE-commerce-Sebrae" 
        ></iframe>
        
    </div>
  )
}
