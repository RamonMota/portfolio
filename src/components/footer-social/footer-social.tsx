
import { Fragment } from 'react';
import './footer-social.scss';

export const FooterSocial = () => {

  const social = [
    {
      icon: 'icon-linkedin',
      link: 'https://www.linkedin.com/in/ramon-mota-3b4b9413a/'
    },
    {
      icon: 'icon-Instagram',
      link: 'https://www.instagram.com/ramon_mota117/'
    },
    {
      icon: 'icon-Dribble',
      link: 'https://dribbble.com/ramonmota'
    },
    {
      icon: 'icon-github',
      link: 'https://github.com/ramonmota'
    },
  ]

  return (
    <Fragment>
      {social.map((social, i) => (
        <a key={i} className={social.icon} href={social.link} />
      ))}
    </Fragment>
  )
}
