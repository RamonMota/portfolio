import { Box, Container, Flex, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Skeleton, Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Paths } from '../../../config/paths/path'

import bannerCase from './img/thumbnail.png'
import './case-vaidebet.scss'
// import { useMoveScrollContent } from '../../../hooks/move-scroll'

export const CaseWelcomeVaidebet = () => {

  const contentText = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (contentText.current) {
        const minhaDiv = contentText.current;
        minhaDiv.addEventListener("scroll", handleScroll);
        return () => {
          minhaDiv.removeEventListener("scroll", handleScroll);
        };
      }
    }, 300)
  }, []);

  const handleScroll = () => {
    if (contentText.current) {
      const minhaDiv = contentText.current;
      const posicaoScroll = minhaDiv.scrollTop;
      
      setParallaxImg(posicaoScroll)
    }
  };



  // const opacityContent = useMoveScrollContent({
  //   velocity: 300,
  //   containerSize: contentText.current.offsetHeight
  // })
  const [parallaxImg, setParallaxImg] = useState<number>();
  const [isLoadingFrame, setIsLoadingFrame] = useState(true);
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
  }, [actualpath])


  return (
    <Modal
      isCentered
      onClose={CloseModal}
      size='full'
      isOpen={isOpenModal}
      motionPreset='slideInBottom'
      autoFocus={false}
    >
      <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(2px)' />
      <ModalContent
        bg={'#2d3748'}
        className='content-modal-case'
        mt={160}
        mx={{ base: 0, lg: 10 }}
        mb={0}
        borderTopRadius='1rem'
        borderBottomRadius='0'>
        <ModalHeader fontSize='sm' fontWeight='light' px='1rem' py='.85rem' color='white'>E-commerce Sebrae</ModalHeader>
        <ModalCloseButton color='white' />
        <ModalBody ref={contentText} px='1rem' py='0' className='scroll-content'>
          <Container maxW='xl' p='0'>
            <Flex gap='.5rem' mb='1rem'>
              <Text p='.2rem .6rem' lineHeight='normal' fontSize='xs' color='#fff' border='1px solid #fff' borderRadius='20px'>UI/UX</Text>
              <Text p='.2rem .6rem' lineHeight='normal' fontSize='xs' color='#fff' border='1px solid #fff' borderRadius='20px'>Illustrator</Text>
              <Text p='.2rem .6rem' lineHeight='normal' fontSize='xs' color='#fff' border='1px solid #fff' borderRadius='20px'>Front End</Text>
            </Flex>
            <Text as='p' fontSize='md' mb='-.2rem' color='#fff' opacity={.5}>2018 - 2020</Text>
            <Text as='h1' fontSize='lg' className='title-section'>E-commerce Sebrae</Text>
            <Text as='p' fontSize='sm' mt='.5rem' color='#fff' fontWeight={500} opacity={.5}>Role</Text>
            <Flex gap='.2rem' direction='column' mb='2rem'>
              <Text lineHeight='normal' fontSize='md' color='#fff'>Bootstrap</Text>
              <Text lineHeight='normal' fontSize='md' color='#fff'>Icon Design</Text>
              <Text lineHeight='normal' fontSize='md' color='#fff'>Figma</Text>
            </Flex>
          </Container>
          <Box className='container-banner'>
            <Img src={bannerCase} className='img-effect' top={parallaxImg} />
          </Box>
          <Container maxW='xl' p={0}>
            <Text color={'white'} opacity={.5} fontWeight={300} fontSize='lg' mb='1rem' lineHeight='2.4rem'>
              There are many benefits to a joint design and development system. Not only
              does it bring benefits to the design team, but it also brings benefits to
              engineering teams.
            </Text>
            <Text color={'white'} opacity={0.5} fontWeight={300}>
              There are many benefits to a joint design and development system. Not only
              does it bring benefits to the design team, but it also brings benefits to
              engineering teams. It makes sure that our experiences have a consistent look
              and feel, not just in our design specs, but in production.
            </Text>
          </Container>
          <Box maxW='900px' mx='auto' my='2rem'>
            <Skeleton isLoaded={!isLoadingFrame} borderRadius='8px'>
              <iframe className='frame-content'
                title='figma'
                width="100%" height="400"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FG5LP5npZCmW2gBvDFcVrec%2FE-commerce-Sebrae%3Fnode-id%3D0%253A1%26t%3DQLAbh3DkHL1X49F7-1"
                allowFullScreen
                onLoad={() => setIsLoadingFrame(false)}>
              </iframe>
              <Text fontSize='sm' textAlign='center' mt='.3rem' color='white' opacity={.5}>
                e-comerce Sebrae prototype
              </Text>
            </Skeleton>
          </Box>
          <Container maxW='xl' p='0'>
            <Text color={'white'} opacity={.5} fontWeight={300}>
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
            </Text>
          </Container>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
