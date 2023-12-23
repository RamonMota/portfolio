
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
    // {
    //   icon: 'icon-Instagram',
    //   link: 'https://www.instagram.com/ramon_mota117/'
    // },
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
          target='blank'
          href={social.link} />
      ))}
    </Fragment>
  )
}
