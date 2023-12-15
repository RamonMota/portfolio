import itsMe from '../../assets/img/iface.png'
import './home.scss'
import { CardItem } from '../../components/card/card-item';
import img from '../../assets/img/imgTest.jpg'
import { FooterSocial } from '../../components/footer-social/footer-social';
import { useSizeScreen } from '../../hooks/height-screen';
import { Paths } from '../../config/paths/path';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import { SkillList } from '../../components/skill-list/skill-list';
import { useMoveScrollWindowsDown } from '../../hooks/move-scroll';

export const Home = () => {

    const screenSize = useSizeScreen()
    const goToCases = () => window.scrollTo({ top: screenSize.heightScreen, behavior: 'smooth' })

    const opacityCase = useMoveScrollWindowsDown(150)
    const opacityContent = useMoveScrollWindowsDown(300)

    return (
        <div className='container-home' >
            <Box className='container-full-height' p='1rem' h='100vh' w='100%' position='relative'>
                <Box opacity={opacityContent} className='box-info' position='relative' pb='12'>
                    <Image src={itsMe} alt="it's Me!" />
                    <Text as='span' >Hey, i’m</Text>
                    <Text as='h1' >Ramon Mota</Text>
                    <Box mb='1rem'>
                        <SkillList />
                    </Box>
                    <FooterSocial />
                </Box>
                <Button bg='none !important'
                    color='#fff'
                    borderRadius={8}
                    fontWeight={400}
                    position='fixed'
                    bottom='1rem'
                    right='1rem'
                    onClick={goToCases}
                    opacity={opacityCase}
                    display={opacityCase === 0 ? 'none' : ''}
                >Cases</Button>
            </Box>
            <Box p='1rem' w='100%'>
                <h2 className='title-section'>Case studies</h2>
                <span className='subtitle-section'>Selected projects</span>
                <div className='container-cards'>
                    <CardItem
                        uiux={true}
                        illustrator={true}
                        frontend={true}
                        new={false}
                        date={'2002'}
                        name={'E-commerce sebrae dolor sit amet consectetur adipiscing elitPP'}
                        image={img}
                        router={Paths.CASES_WELCOME_VAIDEBET} />
                </div>
            </Box>
        </div>
    )
}