import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

import Navbar from './navbar/Navbar'

const Layout = ({toggle,handleToggle}) => {
  return (
    <>
    <Navbar toggle={toggle} handleToggle={handleToggle}/>
    <Box onClick={toggle && handleToggle}>
        <Outlet/> 
      <Footer/>
    </Box>
    </>
  )
}

export default Layout