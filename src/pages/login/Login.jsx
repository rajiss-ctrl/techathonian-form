import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';

import {
        Stack,
        Flex, 
        Heading, 
        Input, 
        FormControl,  
        FormHelperText,
        Button
      } from '@chakra-ui/react'

const Login = () => {
  const initialLoginState = [
{
  logemail:'',
  logpassword:''
}

  ]
  const navigate = useNavigate()
const [userDetail,setUserDetail] = useState(initialLoginState)
const [user,setUser] = useState({})
const [loginErr,setLoginErr] = useState('')

const handleLoginChange = (e)=>{
  //getting values of the user who wants to login
  const {name,value}= e.target
  setUserDetail({...user,[name]:value})
}
  useEffect(()=>{
    //getting data of the user from the sessionstorage
      const user = JSON.parse(sessionStorage.getItem('user'))
     setUser(user)

     console.log(user)

},[])
    

// Warning: A component is changing an uncontrolled input to be controlled. 
// This is likely caused by the value changing from undefined to a defined value,
//  which should not happen. Decide between using a controlled
//  or uncontrolled input element for the lifetime of the component. More info



const handleLoginSubmit = (e)=>{
 e.preventDefault()

 console.log(user)
 //compare the input of the user to session storage record before giving access
 let err= 'Details not match with user records!'
if(userDetail?.logemail !== user?.email && userDetail?.logpassword !== user?.password){
  console.log('not match')
  setLoginErr(err)
}else{
  const authUser = user.email
  
  sessionStorage.getItem('authUser') === null &&
  sessionStorage.setItem('authUser',JSON.stringify(authUser)) 
  navigate('/dashboard') 
}
}

  return (
    <Stack width={'100%'} height={'90vh'} background={'rgb(14, 25, 71)'}>
    <Flex
        paddingTop={'100px'} 
        alignItems={'center'} 
        justifyContent={'center'} 
        flexDirection={'column'}
        >
        <Heading fontSize={{base:'23px', md:'35px'}} color={'#fff'}>Log in Techathonian</Heading>
      <form style={{width:'70%'}}  >
                <FormControl display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} width={'100%'}>
            <Input 
                onChange={handleLoginChange} 
                marginTop={'16px'} color={'#fff'}  
                type='email' name='logemail' 
                value={userDetail.logemai} 
                width={{base:'100%', md:'100%',lg:'50%'}} 
                placeholder='Your email' />
            <Input 
                onChange={handleLoginChange} 
                marginTop={'16px'}  
                name='logpassword' 
                value={userDetail.logpassword} 
                color={'#fff'} 
                width={{base:'100%', md:'100%',lg:'50%'}} 
                type='password' 
                placeholder='Password' />
              <Button  onClick={handleLoginSubmit} marginTop={'16px'}  >Sign In</Button>
            <FormHelperText color={'red'}>{loginErr}</FormHelperText>
        </FormControl>
      </form>
    </Flex>
    </Stack>
  )
}

export default Login