
import { Fragment } from 'react';
import './index.scss';

export const SocialMedia = () => {

  const social = [
    {
      icon: 'icon-Dribble',
      link: 'https://dribbble.com/ramonmota'
    },
    {
      icon: 'icon-linkedin',
      link: 'https://www.linkedin.com/in/ramon-mota-3b4b9413a/'
    },
    {
      icon: 'icon-github',
      link: 'https://github.com/ramonmota'
    },
  ]

  return (
    <Fragment>
      {social.map((social, i) => (
        <a key={i}
          className={`icon-social ${social.icon}`}
          aria-label='ícone social'
          target='_blank'
          rel="noreferrer"
          href={social.link}
        >
          <span className="sr-only">Abrir rede social</span>
        </a>
      ))}
    </Fragment>
  )
}
