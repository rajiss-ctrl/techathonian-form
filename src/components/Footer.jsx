import React from 'react'
import { FaGithub,FaTwitter } from 'react-icons/fa'
import { Box,Heading, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'



const Footer = () => {
  return (
    <footer>
        <Box fontFamily={'Manrope'} background={'#312b2b'} color={'#FFFFFF'} padding={'20px'}>
            <Heading color={'#FFFFFF'} fontSize={'20px'} marginBottom={'20px'}>Techies</Heading>
            <Box display={'flex'} justifyContent={'space-between'} flexDir={['column','column','column','row','row']}>
                <Box marginBottom={['20px','20px','20px','0','0']} fontSize={['12px','14px','14px','15px']}>
                    <Text color={'#FFFFFF'} fontFamily={'Manrope'}>Browser sessionStorage at work</Text>
                    <Text color={'#FFFFFF'} fontFamily={'Manrope'}>Copyright &copy; 2022  Techathon: Raji S Sanjo</Text>
                    <Text color={'#FFFFFF'} fontFamily={'Manrope'}>Techies</Text>
                </Box>
                <Box marginBottom={['20px','20px','20px','0','0']} fontSize={['12px','14px','14px','15px']}>
                    <Text color={'#FFFFFF'} fontFamily={'Manrope'}>twitter.com/rajisanjo</Text>
                    <Text color={'#FFFFFF'} fontFamily={'Manrope'}>github.com/rajiss-ctrl</Text>
                    <Text color={'#FFFFFF'} fontFamily={'Manrope'}>Browser sessionStorage at work</Text>
                </Box>
                <Box fontSize={['12px','14px','14px','15px']}>
                    <Text cursor={'pointer'} color={'#FFFFFF'} fontFamily={'Manrope'} ><Link display={'flex'} alignItems={'center'} gap={'2px'} href="https://www.twitter.com/rajisanjo"><FaTwitter/> <Box textAlign={'center'}>Twitter</Box></Link> </Text>
                    <Text cursor={'pointer'} color={'#FFFFFF'} fontFamily={'Manrope'} ><Link display={'flex'} alignItems={'center'} gap={'2px'} href="https://www.github.com/rajiss-ctrl"><FaGithub/> <Box textAlign={'center'}>github</Box> </Link></Text>
                    <Text cursor={'pointer'} color={'#FFFFFF'} fontFamily={'Manrope'}>Browser sessionStorage at work</Text>
                </Box>
            </Box>
        </Box>
    </footer>
  )
}

export default Footer