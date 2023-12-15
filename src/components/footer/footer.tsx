
import { Box, Text } from '@chakra-ui/react'

import './footer.scss'

export const Footer = () => {
  return (
    <footer className='footer-container'>
      <div>
        <Text as={'p'} color='white' fontSize={'1.3rem'} fontWeight={200} mb={-2} >need a creative mind?</Text>
        <Text as={'h2'} color='white' fontSize={'2.5rem'} fontWeight={700}>Let’s work together</Text>
        <Box mt='1rem' mb='2rem'>
          <a className='btn-sm' href="mailto:ramonmotha@gmail.com">Contact</a>
        </Box>
      </div>
    </footer>
  )
}
