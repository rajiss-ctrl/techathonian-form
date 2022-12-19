import React from 'react'
import { Box,Heading, Text } from '@chakra-ui/react'


const Footer = () => {
  return (
    <footer>
        <Box fontFamily={'Manrope'} background={'#312b2b'} color={'#FFFFFF'} padding={'20px'}>
            <Heading fontSize={'20px'} marginBottom={'20px'}>Techies</Heading>
            <Box display={'flex'} justifyContent={'space-between'} flexDir={['column','column','column','row','row']}>
                <Box marginBottom={['20px','20px','20px','0','0']} fontSize={['12px','14px','14px','15px']}>
                    <Text fontFamily={'Manrope'}>Browser sessionStorage at work</Text>
                    <Text fontFamily={'Manrope'}>Copyright &copy; 2022  Techathon: Raji S Sanjo</Text>
                    <Text fontFamily={'Manrope'}>Techies</Text>
                </Box>
                <Box marginBottom={['20px','20px','20px','0','0']} fontSize={['12px','14px','14px','15px']}>
                    <Text fontFamily={'Manrope'}>twitter.com/rajisanjo</Text>
                    <Text fontFamily={'Manrope'}>github.com/rajiss-ctrl</Text>
                    <Text fontFamily={'Manrope'}>Browser sessionStorage at work</Text>
                </Box>
                <Box fontSize={['12px','14px','14px','15px']}>
                    <Text fontFamily={'Manrope'}>twitter.com/rajisanjo</Text>
                    <Text fontFamily={'Manrope'}>github.com/rajiss-ctrl</Text>
                    <Text fontFamily={'Manrope'}>Browser sessionStorage at work</Text>
                </Box>
            </Box>
        </Box>
    </footer>
  )
}

export default Footer