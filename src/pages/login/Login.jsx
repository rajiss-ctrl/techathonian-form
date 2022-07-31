import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import {Link} from 'react-router-dom'
import {
        Stack,
        List,
        ListItem,
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
const [user,setUser] = useState([])
const [loginErr,setLoginErr] = useState('')

const handleLoginChange = (e)=>{
  //getting values of the user who wants to login
  const {name,value}= e.target
  setUserDetail({...userDetail,[name]:value})
}
  useEffect(()=>{
    //getting datao of the user fro the sessionstorage
     const user = JSON.parse(sessionStorage.getItem('user'))
     setUser(user)
     console.log(user.password)
},[])

const handleLoginSubmit = (e)=>{
 e.preventDefault()
 //compare the input of the user to session storage input before giving access
 let err= 'Details not match with user records!'
if(userDetail.logemail !== user.email && userDetail.logpassword !== user.password){
  console.log('not match')
  setLoginErr(err)
}else{
    console.log(1)
  navigate('/dashboard')
}
}

  return (
    <Stack width={'100%'} height={'100vh'} background={'rgb(14, 25, 71)'}>
    <Navbar>
        <List display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
          <Link to='/'><ListItem color={'#fff'}>Sign Up</ListItem></Link>
        </List>
    </Navbar>
    <Flex paddingTop={'100px'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
        <Heading fontSize={'35px'} color={'#fff'}>Log in Techathonian</Heading>
       <FormControl display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} width={'100%'}>
            <Input marginTop={'16px'} color={'#fff'} onChange={handleLoginChange} type='email' name='logemail' value={user.logemail} width={'50%'} placeholder='Your email' />
            <Input marginTop={'16px'} onChange={handleLoginChange} name='logpassword' value={user.logpassword} color={'#fff'} width={'50%'} type='password' placeholder='Password' />
              <Button marginTop={'16px'}  onClick={handleLoginSubmit}>Sign In</Button>
            <FormHelperText color={'red'}>{loginErr}</FormHelperText>
        </FormControl>
    </Flex>
    </Stack>
  )
}

export default Login