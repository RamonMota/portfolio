import { Box, Flex, Image } from '@chakra-ui/react';
import { DrawerContact } from '../drawer-contact/drawer-contact';
import itsMe from '../../assets/img/i.png'
import './header.scss';
import { useEffect, useState } from 'react';

export const Header = () => {
  const resume = 'https://www.figma.com/proto/45UzMsCHRxTkaIrTc14K2U/Resume-Ramon?page-id=0%3A1&node-id=105%3A29&viewport=-175%2C358%2C0.46&scaling=min-zoom'


  const [showFace, setShowFace] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const distanceFromTop = window.pageYOffset;
      // const distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;

      /* eslint-disable no-console */
      console.log('distanceFromTop', distanceFromTop);
      if (distanceFromTop > 277) {
        setShowFace(true)
      } else setShowFace(false)

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex alignItems={'Center'} p={{ base: 4, md: 8 }} className='container-header'>
      <Image src={itsMe} w={42} alt="logo" opacity={showFace ? 1 : 0} transition={'.3s'}/>
      <Flex gap={3}>
        <a className='btn-sm' href={resume} target="_blank">Resume</a>
        <DrawerContact />
      </Flex>
    </Flex>
  )
}