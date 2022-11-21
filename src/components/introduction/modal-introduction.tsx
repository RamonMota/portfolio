import { useEffect, useState } from "react";
import { Text, Modal, ModalBody, ModalContent, Button } from "@chakra-ui/react";
import useLocalStorage from "../../hooks/localStrege";

import './modal-introduction.scss'

export const ModalIntroduction = () => {
  const [showIntroduction, SetShowIntroduction] = useState(false)

  const [storageIntroduction, setStorageIntroduction] = useLocalStorage('showIntroduction', true)
  const [keyFrameIntrodutuin, setKeyFrameIntrodutuin] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (storageIntroduction) {
        SetShowIntroduction(true)

        setInterval(() => {
          setKeyFrameIntrodutuin(keyFrameCount => keyFrameCount + 0.5);
        }, 500);

        setTimeout(() => {
          // setStorageIntroduction(false)
          SetShowIntroduction(false)
        }, 4000)
      }
    }, 300)
  }, [])

  return (
    <>
      <Modal
        isCentered
        onClose={() => null}
        size='full'
        isOpen={showIntroduction}
        motionPreset='scale'
      >
        <ModalContent boxShadow='none' borderRadius='0' bg='black'>
          <ModalBody p={8} display="flex" flexDirection="column" justifyContent="center">
            <Text fontWeight='600'
              fontSize={{ base: 50, md: 100 }}
              color='white'
              className={`opacityHide 
              ${keyFrameIntrodutuin >= 3 ? 'animate-animated animate-fadeOut' : ''}
              ${keyFrameIntrodutuin >= 0.5 && keyFrameIntrodutuin <= 3 ? 'animate-animated animate-fadeIn' : ''}
              `}>Welcome to</Text>

            <Text fontWeight='600'
              fontSize={{ base: 50, md: 100 }}
              color='white'
              mt={{ base: -5, md: -50 }}
              className={`opacityHide 
              ${keyFrameIntrodutuin >= 3 ? 'animate-animated animate-fadeOut' : ''}
              ${keyFrameIntrodutuin >= 1 && keyFrameIntrodutuin <= 3 ? 'animate-animated animate-fadeIn' : ''}
              `}>My World</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
