import { useSizeScreen } from '../../hooks/height-screen';
import { Box, Button, Flex } from '@chakra-ui/react';

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
  ]

  return (
    <Flex as='footer' gap={2} position='absolute' bottom='-5' left='-3' right='0'>
      {social.map((social, i) => (
        <Button key={i}
          as='a'
          p={0}
          bg='none !important'
          color='#fff'
          target='_blank'
          fontSize={22}
          fontWeight={0}
          className={social.icon}
          href={social.link} />
      ))}
    </Flex >
  )
}
