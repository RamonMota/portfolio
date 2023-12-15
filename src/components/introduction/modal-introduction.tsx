import { useEffect, useState } from "react";
import { Text, Box, Flex } from "@chakra-ui/react";

import './modal-introduction.scss'

export const ModalIntroduction = () => {


  const [keyFrameIntrodutuin, setKeyFrameIntrodutuin] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setKeyFrameIntrodutuin(keyFrameCount => keyFrameCount + 0.5);
    }, 500);
  }, [])

  return (
    <Flex position={'absolute'} alignItems={'center'} top={0} bottom={0} left={5} right={0} m={'auto'} zIndex={9999}>
      <Box>
        <Text fontWeight='600'
          fontSize={{ base: 50, md: 100 }}
          color='white'
          className={`opacityHide 
                ${keyFrameIntrodutuin >= 3 ? 'animate-animated animate-fadeOut' : ''}
                ${keyFrameIntrodutuin >= 0.5 && keyFrameIntrodutuin <= 3 ? 'animate-animated animate-fadeIn' : ''}
                `}>
          Welcome to
        </Text>

        <Text fontWeight='600'
          fontSize={{ base: 50, md: 100 }}
          color='white'
          mt={{ base: -5, md: -50 }}
          className={`opacityHide 
                ${keyFrameIntrodutuin >= 3 ? 'animate-animated animate-fadeOut' : ''}
                ${keyFrameIntrodutuin >= 1 && keyFrameIntrodutuin <= 3 ? 'animate-animated animate-fadeIn' : ''}
                `}>
          My World
        </Text>
      </Box>
    </Flex>
  )
}
