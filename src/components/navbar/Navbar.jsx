import React from 'react'
import { NavLink} from 'react-router-dom'
import Logo from  '../../assets/images/techathon.png'

import {
        Flex,
       Image,
       List,
       ListItem
      } from "@chakra-ui/react";


const Navbar = () => {
  return (
      <Flex 
        width={'100%'} 
        background={'rgb(14, 25, 71)'} 
        alignItems={'center'} 
        justifyContent={'space-between'} 
        padding={{base:'30px 20px', md:'30px 70px', lg:''}}>
         <NavLink  to='/'>
                <Image src={Logo} width={{base:'60px',md:'100px', lg:'100px'}} 
                alt='Techathon Logo' /></NavLink>
        <List display={{base:'block', md:'flex', lg:'flex'}} alignItems={'center'} justifyContent={'space-between'}>
          <NavLink 
                  style={({isActive})=> isActive ? 
                  {color:'rgb(14, 25, 71)', background:'white',borderRadius:'10px'} : 
                  {color:'#0ea1a1'}} to='/'><ListItem padding={'0 15px'}
                  >Home</ListItem></NavLink>
          <NavLink 
                  style={({isActive})=> isActive ? 
                  {color:'rgb(14, 25, 71)', background:'white',borderRadius:'10px'} : 
                  {color:'#0ea1a1'}} to='/dashboard'><ListItem padding={'0 15px'}
                  >Dashboard</ListItem></NavLink>
          <NavLink 
                  style={({isActive})=> isActive ? 
                  {color:'rgb(14, 25, 71)', background:'white',borderRadius:'10px'} : 
                  {color:'#0ea1a1'}} to='/login'><ListItem padding={'0 15px'}
                  >Log In</ListItem></NavLink>
          <NavLink 
                style={({isActive})=> isActive ? 
                {color:'rgb(14, 25, 71)', background:'white',borderRadius:'10px'} : 
                {color:'#0ea1a1'}} to='/signup'><ListItem  padding={'0 15px'}
                >Sign Up</ListItem></NavLink>
        </List>  
      </Flex>
  )
}

export default Navbar