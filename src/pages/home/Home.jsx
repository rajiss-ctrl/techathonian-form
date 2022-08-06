import React from 'react'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Manonpc from  '../../assets/images/computer_man.png'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
        <Flex 
        padding={{base:'30px 70px', sm:'30px 70px', md:'30px 70px', lg:'60px'}} 
        width={'100%'} 
        min-height={'100%'}
        justifyContent={'center'}
        alignItems={'center'} 
        background={'#fff'}
        borderRadius={'20px'}
        flexDirection={{ base: 'column',sm:'column', md: 'column', lg: 'row' }}
        >
      <Box alignItems={'center'} 
            justifyContent={'center'}
            padding={'20px'}
            // display={'flex'}
            flexDirection={{base:'column',sm:'column', md:'column', lg:'column'}}
            >
        <Heading 
              display={'flex'} 
              flexDirection={'row'} 
              fontSize={{base:'20px', md:'40px', lg:'45px'}} 
              placeContent={{base:'center', md:'center', lg:'start'}}
              >
                <Box  
                    color={'rgb(14, 25, 71)'} 
                    marginRight={'10px'}>
                    TECHATHON</Box> 
                <Box 
                    color={'rgb(29, 175, 210)'}
                    >COMMUNITY</Box></Heading>
            <Text 
                color={'rgb(14, 25, 71)'}  
                paddingRight={{base:'0',sm:'0', md:'0', lg:'36%'}}
                marginTop={'30px'} 
                fontSize={'16px'}
                textAlign={{base:'center',sm:'center', md:'center', lg:'left'}} 
                >Techathon!!! Techathon is the way to go when it comes to learning tech
            . Take you from newbie to advance and Techathon wouldn't leave you there but take you to 
            collaborative classes called open source.</Text>
        <Box    textAlign={{base:'center',sm:'center',  md:'center', lg:'left'}}>
                   <Link to='/signup' >
              <Button  
                    marginTop={{base:'40px', md:'40px', lg:'30px'}} 
                    marginBottom={{base:'40px', md:'40px', lg:'0'}}
                    color={'#fff'} 
                    background={'rgb(29, 175, 210)'}
                    >Get Started</Button>
                    </Link>
        </Box>
      </Box>
       
         <Image 
              src={Manonpc}
              marginRight={{base:'0', md:'0', lg:'150px'}} 
              alt='man on computer'
              width={{base:'70%', md:'60%', lg:'25%'}}
              />
      
       
      </Flex>
      <footer style={{textAlign:'center', marginTop:'60px'}}>
        <p>Copyright &copy; 2022  Techathon: Raji S Sanjo</p></footer>
      </>
  )
}

export default Home;