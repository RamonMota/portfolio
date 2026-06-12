import React from 'react'

import './tag.scss'

interface ITag {
    name: string
}
export const Tag = (props: ITag) => {
  return (
    <a className='container-tag'>{props.name}</a>
  )
}
