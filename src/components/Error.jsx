import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Error = () => {
  return (
    <Flex fontFamily={'Manrope'} height={'80vh'} justifyContent={'center'} alignItems={'center'}>
      <Heading color={'red'} fontSize={'20px'}>Oops, page does not exist!</Heading>
    </Flex>
  )
}

export default Error