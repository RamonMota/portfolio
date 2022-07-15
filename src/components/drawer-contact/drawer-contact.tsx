
import React, { useState } from 'react'
import './drawer-contact.scss'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea, useDisclosure } from '@chakra-ui/react';

export const DrawerContact = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ size, setSize ] = useState('xs')
    
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
              <DrawerHeader borderBottomWidth='1px'>
                Create a new account
              </DrawerHeader>
    
              <DrawerBody>
                <Stack spacing='24px'>
                  <Box>
                    <FormLabel htmlFor='username'>Name</FormLabel>
                    <Input
                      id='username'
                      placeholder='Please enter user name'
                    />
                  </Box>
    
                  <Box>
                    <FormLabel htmlFor='url'>Url</FormLabel>
                    <InputGroup>
                      <InputLeftAddon>http://</InputLeftAddon>
                      <Input
                        type='url'
                        id='url'
                        placeholder='Please enter domain'
                      />
                      <InputRightAddon>.com</InputRightAddon>
                    </InputGroup>
                  </Box>
    
                  <Box>
                    <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                    <Select id='owner' defaultValue='segun'>
                      <option value='segun'>Segun Adebayo</option>
                      <option value='kola'>Kola Tioluwani</option>
                    </Select>
                  </Box>
    
                  <Box>
                    <FormLabel htmlFor='desc'>Description</FormLabel>
                    <Textarea id='desc' />
                  </Box>
                </Stack>
              </DrawerBody>
    
              <DrawerFooter borderTopWidth='1px'>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue'>Submit</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
         
    </>
    )
  }
  
  