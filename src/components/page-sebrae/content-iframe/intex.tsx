import { IframeHTMLAttributes, useEffect, useRef, useState } from 'react'
import './index.scss'

export const ContentIframe = () => {
    const [isHiddend, setIsHiddend] = useState<boolean>(false)
    const [index, setIdex] = useState<boolean>(false)

    const handleShowIframe = () => {
        setIsHiddend(true)
        setTimeout(() => { setIdex(true) }, 300)
    }

    return (
        <div className={`content-iframe ${isHiddend ? '' : 'skeleton'}`}>
            <div onClick={handleShowIframe} className={`glass 
            ${isHiddend ? 'hidden' : ''}
            ${index ? 'z-under' : ''}
            `} >
                <i className='icon-visibility' />
                <p>Click to view some pages of the prototype</p>
            </div>
            <iframe
                className='iframe-figma'
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FG5LP5npZCmW2gBvDFcVrec%2FE-commerce-Sebrae%3Ftype%3Ddesign%26node-id%3D1408%253A96%26mode%3Ddesign%26t%3DkgUDVQKdT4kZFEuC-1"
                allowFullScreen />
        </div>
    )
}
