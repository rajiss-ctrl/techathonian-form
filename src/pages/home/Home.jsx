import React from 'react'
import { motion } from 'framer-motion';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Manonpc from  '../../assets/images/computer_man.png'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
        <Flex 
        // padding={{base:'30px 70px', sm:'30px 70px', md:'30px 70px', lg:'60px'}} 
        padding={['30px 20px','30px 20px','130px 70px']}
        width={'100%'} 
        height={'100vh'}
        background={'#e7e7d8'}
        >

      <Box
        display={'flex'}
        background={'#FFFFFF'}
          justifyContent={['center','center','center','space-between','space-between']}
          alignItems={'center'} 
          padding={['20px','20px','20px','20px']}
          height={['85vh','80vh','80vh','60vh','60vh',]}
          width={['100%','100%','100%','100%','100%']}
          borderRadius={'5px'}
          flexDirection={{ base: 'column',sm:'column', md: 'column', lg: 'row' }}>
          <Box 
            width={['100%','100%','50%','50%']}
            // height={['80%','80%','60%','60%']}
            padding={['20px 0 0 0','20px 0 0 0','20px 0 0 0','0 0 20px 70px','0 0 20px 70px']}
            marginBottom={['20px','40px','60px','0','0']}
            >
            
        <motion.div  initial={{ opacity: 0, x: '-100vh' }}
                      animate={{ opacity: 1, x: 0 }}>
        <Heading 
              fontFamily={'Manrope'}
              display={'flex'} 
              // flexDirection={'row'}
              gap={'10px'} 
              // fontSize={{base:'20px', md:'40px', lg:'45px'}} 
              fontSize={['15px','20px','25px','25px','45px']} 
              justifyContent={{base:'center', md:'center', lg:'start'}}
              >
                <Box  
                    color={'rgb(14, 25, 71)'} 
                   fontFamily={'Manrope'}
                    >
                    TECHATHON</Box> 
                <Box 
                    color={'rgb(29, 175, 210)'}
                    >COMMUNITY</Box></Heading>
              </motion.div>
              <motion.div  initial={{ opacity: 0, y: '-100vh' }}
              animate={{ opacity: 1, y: 4 }}>
            <Text 
                color={'rgb(14, 25, 71)'}  
                // paddingRight={{base:'0',sm:'0', md:'0', lg:'36%'}}
                padding={['0 10px 0 10px','0 10px 0 10px','0 10px 0 10px','0 15% 0 0','0 15% 0 0',]}
                marginTop={'20px'} 
                fontSize={'16px'}
                // textAlign={{base:'center',sm:'center', md:'center', lg:'left'}} 
                textAlign={['center','center','left','left']}
                fontFamily={'Manrope'} 
                >Techathon!!! Techathon is the way to go when it comes to learning tech
                . Take you from newbie to advance and Techathon wouldn't leave you there but take you to 
                collaborative classes called open source.</Text>
                </motion.div>
          <Box textAlign={{base:'center',sm:'center',  md:'center', lg:'left'}}>
                   <Link to='/signup' >
              <Button 
                    fontFamily={'Manrope'} 
                    // marginTop={{base:'20px', md:'40px', lg:'30px'}} 
                    marginTop={['20px','20px','20px','40px','30px']} 
                    // marginBottom={{base:'0px', md:'40px', lg:'0'}}
                    fontSize={['14px','14px','16px','16px',]}
                    color={'#fff'} 
                    background={'rgb(29, 175, 210)'}
                    >Get Started</Button>
                    </Link>
        </Box>
      </Box>
        <motion.div animate={{ scaleX: 1.2 }}>
          <Box display={'flex'}   padding={['20px','0','0','20px','20px',]} justifyContent={'center'} alignItems={'center'}>
            <Image width={['90%','50%','60%','60%','60%']} src={Manonpc} alt='man on pc animation'/>
          </Box>
        </motion.div>
      </Box>
       
      </Flex>
      </>
  )
}

export default Home;