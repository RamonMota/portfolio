import React from 'react'
import './card-item.scss'
import img from '../../assets/img/imgTest.jpg'
import { Link } from 'react-router-dom'

export default interface Icard {
  uiux : boolean
  illustrator : boolean
  frontend : boolean
  new : boolean
  date : string
  name : string
  router : string
  image : string
}

export const CardItem = (props: Icard) => {
  return (
    <Link className='container-card' to={props.router} style={{backgroundImage: `url(` + props.image + `)`}}>
        <header>
            <div>
                {props.uiux && <span className='me-2' >UI/UX</span>}
                {props.illustrator &&<span className='me-2' >Illustrator</span>}
                {props.frontend &&<span>front end</span>}
            </div>
            {props.new && <span>New</span>}
        </header>
        <main>
            <span>{props.date}</span>
            <h3>{props.name}</h3>
        </main>
    </Link>
  )
}
