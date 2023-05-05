
import React, { useEffect, useRef, useState } from 'react'
import './drawer-contact.scss'
import { Box, Button, Drawer, Text, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea, useDisclosure } from '@chakra-ui/react';

export const DrawerContact = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('xs')
  const [isSending, setIsSending] = useState(false)
  const firstField = useRef<HTMLInputElement>(null);


  const IMG_SAND = 'https://lottiefiles.com/63315-mail-send'

  useEffect(() => {
    if (isSending) {
      setTimeout(() => {
        setIsSending(!isSending)
      }, 1000)
    }
  }, [isSending])

  return (
    <>
      <a className='btn-sm' onClick={onOpen}>Contact</a>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
        size={size}

      >
        <DrawerOverlay />
        <DrawerContent bg={'#2d3748'} className='drawer-contact'>
          <DrawerCloseButton color='white'/>
          <DrawerHeader>
            <Text fontWeight='400' fontSize='md' color='white'>Ok, now</Text>
            <Text mt={-2} fontSize='lg' color='white'>What do you want?</Text>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='15px'>
              <Box>
                <FormLabel color='white'  fontWeight={300} fontSize={14} >Name</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Please enter your name'
                  color='white'
                  _placeholder={{ opacity: .4, color: 'white' }}
                />
              </Box>
              <Box>
                <FormLabel color='white'  fontWeight={300} fontSize={14} >What about</FormLabel>
                <Select
                  color='white'
                  id='owner'
                  defaultValue='segun'>
                  <option value='segun'>-</option>
                  <option value='kola'>Kola Tioluwani</option>
                  <option value='kola'>Kola Tioluwani</option>
                </Select>
              </Box>

              <Box>
                <FormLabel color='white'  fontWeight={300} fontSize={14} >E-mail</FormLabel>
                <Input
                  id='username'
                  placeholder='Please enter your e-mail'
                  color='white'
                  _placeholder={{ opacity: .4, color: 'white' }}
                />
              </Box>

              <Box>
                <FormLabel color='white'  fontWeight={300} fontSize={14} >Tell about</FormLabel>
                <Textarea
                  placeholder='What is your interest?'
                  color='white'
                  _placeholder={{ opacity: .4, color: 'white' }}
                  id='desc' />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              bg={'#fff !important'}
              color='#000 !important'
              mx={'auto'}
              loadingText='Submitting'
              onClick={() => setIsSending(!isSending)}
              isLoading={isSending}
              width={'100%'}>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}