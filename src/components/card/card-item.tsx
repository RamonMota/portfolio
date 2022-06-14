import React from 'react'
import './card-item.scss'

export const CardItem = () => {
  return (
    <div className='container-card'>
        <header>
            <div>
                <span className='me-2' >UI/UX</span>
                <span className='me-2' >Illustrator</span>
                <span>front end</span>
            </div>
            <span>New</span>
        </header>
        <main>
            <span>2018 - Today</span>
            <h3>E-commerce sebrae dolor sit amet consectetur adipiscing elitPP</h3>
        </main>
    </div>
  )
}
