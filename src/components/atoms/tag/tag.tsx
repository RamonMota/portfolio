import './tag.scss'

interface ITag {
    name: string
}
export const Tag = (props: ITag) => {
  return (
    <span className='container-tag'>{props.name}</span>
  )
}
