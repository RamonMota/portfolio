import React from 'react'
import { useSizeScreen } from '../../../hooks/height-screen'

import './case-sebrae.scss'

export const CaseSebrae = () => {
    const screenSize = useSizeScreen()
    
  return (
    <div className='container-case'>
        <span className='subtitle-section'>2018 - Today</span>
        <h1 className='title-section'>E-commerce Sebrae</h1>
        <div className='container-iframe'>
          <iframe
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FG5LP5npZCmW2gBvDFcVrec%2FE-commerce-Sebrae%3Fnode-id%3D0%253A1" 
          ></iframe>
        </div>
        
    </div>
  )
}
