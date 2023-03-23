import { Box, Button, Container, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { Paths } from '../../../config/paths/path'
import { useSizeScreen } from '../../../hooks/height-screen'

import './case-vaidebet.scss'

export const CaseWelcomeVaidebet = () => {
  const screenSize = useSizeScreen()
  const actualpath = useLocation().pathname;
  const [isOpenModal, setIsOpenModal] = useState(false)

  let history = useHistory();

  function CloseModal() {
    setIsOpenModal(false)
    setTimeout(() => {
      history.push(Paths.HOME);
    }, 300)
  }

  useEffect(() => {
    if (actualpath === Paths.CASES_WELCOME_VAIDEBET) {
      setIsOpenModal(true)
    }
  }, [])

  return (
    <Modal
      isCentered
      onClose={CloseModal}
      size='full'
      isOpen={isOpenModal}
      motionPreset='slideInBottom'
    >
      <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
      <ModalContent h='100dvh' className='content-modal-case' mt={8} mx={{ base: 4, md: 8 }} mb={0} borderTopRadius='1rem' borderBottomRadius='0'>
        <ModalHeader fontSize='sm' fontWeight='light' px='1rem' py='.85rem'>E-commerce Sebrae</ModalHeader>
        <ModalCloseButton />
        <ModalBody px='1rem' py='.85rem'>
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
