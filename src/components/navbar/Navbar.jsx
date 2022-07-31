import React from 'react'
import {Link} from 'react-router-dom'
import Logo from  '../../assets/images/techathon.png'

import {
        Flex,
       Image
      } from "@chakra-ui/react";

        // ListItem,
        // ListIcon,

const Navbar = ({children}) => {
  return (
      <Flex width={'100%'} alignItems={'center'} justifyContent={'space-between'} padding={'30px 70px'}>
         <Link to='/'><Image src={Logo} width={'100px'} alt='Techathon Logo' /></Link>
          {children}
      </Flex>
  )
}

export default Navbar