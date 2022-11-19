import { Box, Button, Container } from '@chakra-ui/react';
import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Paths } from '../../config/paths/path';
import { DrawerContact } from '../drawer-contact/drawer-contact';
import './header.scss';

export const Header = () => {
  const resume = 'https://www.figma.com/proto/45UzMsCHRxTkaIrTc14K2U/Resume-Ramon?page-id=0%3A1&node-id=105%3A29&viewport=-175%2C358%2C0.46&scaling=min-zoom'

  return (
    <Box p={{ base: 4, md: 8 }} className='container-header'>
      <div></div>
      <div>
        <Button as='a' mr={4} href={resume} target="_blank">resume</Button>
        <Button as='a' >About me</Button>
        {/* <DrawerContact /> */}
      </div>
    </Box>
  )
}