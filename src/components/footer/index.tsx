import './index.scss'

export const Footer = (props: { isHome?: boolean | false }) => {
    return (
        <div className='content-bottom mb-footer'>
            <p>Up for some Creativity?</p>
            <p>Drop a Message</p>
            {props.isHome &&
                <a className='btn-principal mx-auto d-flex mt-md'
                    href="mailto:ramonmotha@gmail.com"
                    target="_blank"
                >Let's talk</a>
            }
        </div>
    )
}
