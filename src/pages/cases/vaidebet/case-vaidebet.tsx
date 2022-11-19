import { Box, Button, Container, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { Paths } from '../../../config/paths/path'
import { useSizeScreen } from '../../../hooks/height-screen'

import './case-vaidebet.scss'

export const CaseWelcomeVaidebet = () => {
  const screenSize = useSizeScreen()
  const actualpath = useLocation().pathname;

  let history = useHistory();

  function CloseModal() {
    history.push(Paths.HOME);
  }

  return (
    <Modal
      isCentered
      onClose={CloseModal}
      size='full'
      isOpen={actualpath === Paths.CASES_WELCOME_VAIDEBET}
      motionPreset='slideInBottom'
    >
      <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
      <ModalContent mt={8} mx={{ base: 4, md: 8 }} mb={0} borderTopRadius='0.375rem' borderBottomRadius='0'>
        <ModalHeader px='16px' py='10px'>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody px='16px' py='5px'>
          <Container className='scroll-content' maxW='xl' p='0'>
            <span className='subtitle-section'>2018 - Today</span>
            <h1 className='title-section'>E-commerce Sebrae</h1>
            <Box>
              There are many benefits to a joint design and development system. Not only
              does it bring benefits to the design team, but it also brings benefits to
              engineering teams. It makes sure that our experiences have a consistent look
              and feel, not just in our design specs, but in production.
              There are many benefits to a joint design and development system. Not only
              does it bring benefits to the design team, but it also brings benefits to
              engineering teams. It makes sure that our experiences have a consistent look
              and feel, not just in our design specs, but in production.
              There are many benefits to a joint design and development system. Not only
              does it bring benefits to the design team, but it also brings benefits to
              engineering teams. It makes sure that our experiences have a consistent look
              and feel, not just in our design specs, but in production.
            </Box>
          </Container>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
