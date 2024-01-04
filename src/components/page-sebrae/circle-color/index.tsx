import './index.scss'

export const CircleColor = (props: { color: string }) => {
    return (
        <div className='content-circle-color'>
            <div className='circle' style={{ background: `#${props.color}` }} />
            <p>#{props.color}</p>
        </div>
    )
}
