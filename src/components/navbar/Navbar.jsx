import React, { useState } from 'react'
import {FaBars, FaTimes } from 'react-icons/fa'
import { NavLink} from 'react-router-dom'


import {
        Box,
        Flex,
       Image,
       List,
       ListItem,
       Text
      } from "@chakra-ui/react";


const Navbar = () => {
const [toggle,setToggle] =useState(false)

const handleToggle = ()=>{
    setToggle(pre=>!pre)    
}

  return (
      <Flex 
      fontFamily={'Manrope'}
        width={'100%'}
        height={['60px','60px','auto','auto','auto']} 
        background={'#b1bcea'} 
        alignItems={'center'} 
        justifyContent={'space-between'} 
        padding={['0','0','20px','20px','20px']}
        // position={['relativ']} 
        >
         <NavLink  to='/'>
                <Text 
                color={'#FFFFFF'} 
                fontWeight={'bold'} 
                fontSize={['14px','16px','18px','24px','24px']} 
                // width={'100px'}
                padding={['0 0 0 15px','0 0 0 15px','0']}
                >Techie</Text>
         </NavLink>
                <Box display={['block','block','none','none','none']} paddingRight={'20px'} onClick={handleToggle}>
                <Box fontSize={'16px'} color={'#FFFFFF'}  display={toggle ? 'none' : 'block'}>
                <FaBars/>
                </Box>
                <Box fontSize={'16px'} color={'#FFFFFF'} display={toggle ? 'block' : 'none'}>
                <FaTimes/>
                </Box>
                </Box>
        <List 
                fontFamily={'Manrope'}
                display={[toggle ? 'block' : 'none' ,toggle ? 'block' : 'none','flex','flex','flex']}
                alignItems={'center'} 
                // justifyContent={'space-between'} 
                gap={['0','0','15px','15px','15px']}
                position={['absolute','absolute','relative']}
                top={['50px','50px','0','0','0']}
                textAlign={['center','center','left','left','left']}
                padding={['20px 0','20px 0','0','0','0']}
                background={'#b1bcea'}
                width={['100%','100%','44%','30%','25%']}
                zIndex={'1'}
                >
           <ListItem marginBottom={['10px','10px','0','0','0']}><NavLink 
                  style={({isActive})=> isActive ? 
                  {color:'#000000',padding:'0 15px', background:'white', borderRadius:'10px'} : 
                  {color:'#FFFFFF'}} to='/'>Home</NavLink></ListItem>
          
          <ListItem marginBottom={['10px','10px','0','0','0']}><NavLink 
                  style={({isActive})=> isActive ? 
                  {color:'#000000',padding:'0 15px', background:'white',borderRadius:'10px'} : 
                  {color:'#FFFFFF'}} to='/dashboard'> Dashboard</NavLink></ListItem>
          
          <ListItem marginBottom={['10px','10px','0','0','0']}><NavLink 
                  style={({isActive})=> isActive ? 
                  {color:'#000000',padding:'0 15px', background:'white' , borderRadius:'10px'} : 
                  {color:'#FFFFFF'}} to='/login'>Log In</NavLink></ListItem>
          
          <ListItem marginBottom={['10px','10px','0','0','0']}><NavLink 
                style={({isActive})=> isActive ? 
                {color:'#000000',padding:'0 15px', background:'white',borderRadius:'10px'} : 
                {color:'#FFFFFF'}} to='/signup'>Sign Up</NavLink></ListItem>
        </List>  
      </Flex>
  )
}

export default Navbar