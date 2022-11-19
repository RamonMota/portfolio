
import React, { useState } from 'react'
import './drawer-contact.scss'
import { Box, Button, Drawer, Text, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea, useDisclosure } from '@chakra-ui/react';

export const DrawerContact = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('xs')

  return (
    <>
      <a className='btn' onClick={onOpen}>Contact</a>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        blockScrollOnMount={false}
        size={size}

      >
        <DrawerOverlay />
        <DrawerContent className='drawer-contact'>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text fontWeight='400' fontSize='md' color='lightGreen'>Ok, now</Text>
            <Text mt={-2} fontSize='lg' color='lightGreen'>What do you want?</Text>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='15px'>

              <Box>
                <label className='label-input' htmlFor='owner'>What about</label>
                <Select id='owner' defaultValue='segun'>
                  <option value='segun'>-</option>
                  <option value='kola'>Kola Tioluwani</option>
                  <option value='kola'>Kola Tioluwani</option>
                </Select>
              </Box>

              <Box>
                <label className='label-input' htmlFor='username'>Your name</label>
                <Input
                  id='username'
                  placeholder='Please enter your name'
                />
              </Box>
              <Box>
                <label className='label-input' htmlFor='username'>Your e-mail</label>
                <Input
                  id='username'
                  placeholder='Please enter your e-mail'
                />
              </Box>

              <Box>
                <label className='label-input' htmlFor='desc'>Tell me more</label>
                <Textarea placeholder='What is your interest?' id='desc' />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              isLoading={false}
              loadingText='Submitting'
              width='100%'>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}