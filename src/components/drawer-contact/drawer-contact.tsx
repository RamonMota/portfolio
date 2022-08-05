
import React, { useState } from 'react'
import './drawer-contact.scss'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea, useDisclosure } from '@chakra-ui/react';

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
            <label className='subtitle-section'>Ok, now</label>
            <h2 className='title-section '>What do you want?</h2>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>

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

          <DrawerFooter borderTopWidth='1px'>
            <Button colorScheme='blue'>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </>
  )
}

