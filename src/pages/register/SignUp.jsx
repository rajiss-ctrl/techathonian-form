import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar';
import {Link} from 'react-router-dom'
import Manonpc from  '../../assets/images/computer_man.png'
import {
        Stack,
        List,
        ListItem,
        Flex, 
        Heading, 
        Input, 
        FormControl,  
        FormHelperText,
        Select,
        Checkbox,
        Button,
        Textarea,
        Image,
        Box,
        Text
      } from '@chakra-ui/react'

const SignUp = () => {
  const navigate = useNavigate()

//   function validateName(value) {
//     let error
//     if (!value) {
//       error = 'Name is required'
//     } else if (value.toLowerCase() !== 'naruto') {
//       error = "Jeez! You're not a fan 😱"
//     }
//     return error
//   }
    const  userInput = [
        {
    firstName:'',
    lastName:'',
    email:'',
    male:'',
    female:'',
    others:'',
    age:0,
    describe:'',
    password:'',
    confirmP:'',
    checked:false
}
]
const [userData,setUserData] =useState(userInput);
const [err,setErr] =useState({});
const [isSubmit,setIsSubmit] =useState(false);


const handleChange = (e)=>{
  //get user inputs
   const {name,value,checked,type} = e.target
    setUserData({...userData,[name]:type === 'checkbox'? checked : value})  
}
// console.log(userData)
const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(JSON.stringify(userData))
    //called the err function here
    setErr(validates(userData))
    setIsSubmit(true)
}

useEffect(()=>{
  console.log(err)
  if(Object.keys(err).length === 0 && isSubmit){
    console.log(userData)
      navigate('/login')
     const user = JSON.stringify(userData)
     sessionStorage.getItem('user') === null &&
     sessionStorage.setItem('user', user)
  }
},[err])

const validates =(values)=>{
  const error ={}
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  
if(!values.firstName){
  error.firstName = "First Name is required"
}
if(!values.lastName){
  error.lastName = "Last Name is required"
}
if(!values.age){
  error.age = "Select your date of birth"
}
if(!values.password){
  error.password = "The field must be filled"
}
if(!values.confirmP){
  error.confirmP = "The field must be filled"
} else if(values.password !== values.confirmP){
  error.confirmP = "The password must be the same"
}
if(!values.describe){
  error.describe = "Describe Yourslf"
}
if(!values.checked){
  error.checked = "You need to agree to term to proceed"
}
if(!values.email){
  error.email = "Email is required"
}else if(!regex.test(values.email)){
  error.email = "This is not a valid email"
}

return error
}

  return (
    <Stack 
          min-height={'100vh'} 
          display={'flex'} 
          paddingBottom={'50px'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'} 
          background={'rgb(14, 25, 71)'}>
    <Navbar>
        <List display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
          <Link to='/login'><ListItem color={'#fff'}  padding={'0 15px'}>Log In</ListItem></Link>
          <Link to='/signup'><ListItem color={'#fff'}>Sign Up</ListItem></Link>
        </List>
    </Navbar>
    <Flex 
        padding={'60px'} 
        width={'80%'} 
        min-height={'50%'}
        alignItems={'center'} 
        justifyContent={'space-between'}
        background={'#fff'}
        borderRadius={'20px'}
        >
      
      <Box width={'50%'} display={'flex'}  flexDirection={'column'} alignItems={'center'} >
        <Image src={Manonpc} width={'50%'} alt='man on computer'/>
        
            <Text color={'#000'} marginTop={'20px'} fontSize={'16px'}>Techthon!!! Techathonis the way when it comes to learning tech
            . Take you from newbie to advance and Techathon wouldn't leave you there but take you to 
            collaborative classes called open source.</Text>
        
      </Box>
          <FormControl 
                  width={'50%'}
                  display={'flex'} 
                  justifyContent={'center'} 
                  flexDirection={'column'} 
                  alignItems={'center'}  
                  >
        <Heading fontSize={'40px'} color={'rgb(29, 175, 210)'}>Become A Techathonian</Heading>
       <form onSubmit={handleSubmit} style={{width:'80%'}}>
            
            <Input 
                  variant={'flushed'} 
                  marginTop={'15px'}
                  width={'100%'} 
                  borderBottom={'1px'} 
                  padding={'10px'} 
                  borderColor={'rgb(29, 175, 210)'} 
                  type='text' 
                  color={'#dad8d8'} 
                  name='firstName' 
                  value={userData.firstName} 
                  onChange={handleChange} 
                  placeholder='First Name' />
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.firstName}</FormHelperText>
            
          
          <Input 
                type='text' 
                variant={'flushed'} 
                 width={'100%'}
                marginTop={'15px'} 
                padding={'10px'} 
                borderBottom={'1px'} 
                borderColor={'rgb(29, 175, 210)'} 
                color={'#dad8d8'} 
                onChange={handleChange} 
                name='lastName' 
                value={userData.lastName} 
                placeholder='Last Name' />
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.lastName}</FormHelperText>
          
          <Input 
                type='email' 
                variant={'flushed'} 
                 width={'100%'}
                marginTop={'15px'} 
                padding={'10px'} 
                borderBottom={'1px'} 
                borderColor={'rgb(29, 175, 210)'} 
                color={'#dad8d8'} 
                onChange={handleChange} 
                name='email' 
                value={userData.lastemail} 
                placeholder='Your Email' />
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.email}</FormHelperText>

      
            <Select 
                  variant={'flushed'} 
                  border={'none'} 
                   width={'100%'}
                  marginTop={'15px'} 
                  paddingLeft={'10px'}  
                  color={'grey'}  
                  onChange={handleChange}
                  required
                  >
                <option   name=''  value=''>Select you gender</option>
                <option   name='male'  value={userData.male}>Male</option>
                <option   name='female' value={userData.fenale}>Female</option>
                <option   name='others' value={userData.others}>Others</option>
            </Select>
            
        
            <Input 
                  variant={'flushed'} 
                  marginTop={'15px'} 
                  padding={'10px'} 
                 width={'100%'}
                  borderBottom={'1px'} 
                  borderColor={'rgb(29, 175, 210)'} 
                  color={'grey'} 
                  onChange={handleChange} 
                  type='date' 
                  name='age' 
                  value={userData.age} 
                  placeholder='Your Age' />
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.age}</FormHelperText>
           
            <Input 
                  variant={'flushed'} 
                  marginTop={'15px'} 
                  padding={'10px'}
                  width={'100%'} 
                  borderBottom={'1px'} 
                  borderColor={'rgb(29, 175, 210)'} 
                  color={'#dad8d8'}  
                  onChange={handleChange} 
                  type='password' 
                  name='password' 
                  value={userData.password} 
                  placeholder='Password' />
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.password}</FormHelperText>
            

            <Input 
                  variant={'flushed'} 
                  marginTop={'15px'} 
                  padding={'10px'}
                  width={'100%'} 
                  borderBottom={'1px'} 
                  borderColor={'rgb(29, 175, 210)'} 
                  color={'#dad8d8'} 
                  onChange={handleChange} 
                  type='password' 
                  name='confirmP' 
                  value={userData.confirmP} 
                  placeholder='confirm Password' />
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.confirmP}</FormHelperText>

            
            <Textarea 
                    border={'1px'} 
                    marginTop={'15px'} 
                    padding={'10px'} 
                     width={'100%'}
                    borderColor={'rgb(29, 175, 210)'} 
                    color={'#dad8d8'} 
                    onChange={handleChange} 
                    name='describe' 
                    value={userData.describe} 
                    placeholder='Describe Yourself' />
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.describe}</FormHelperText>

        
            <Box >
                <Checkbox 
                    type='checkbox' 
                    marginTop={'15px'} 
                    padding={'10px'} 
                    color={'#111'}  
                    onChange={handleChange}
                    border={'1px'} 
                    borderColor={'rgb(29, 175, 210)'}
                    name='checked' 
                    value={userData.checked}
                    >
                      Agree to terms</Checkbox>
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.checked}</FormHelperText>
   
            </Box>
        
            <Box >
                <Button
                  mt={4}
                  background={'rgb(29, 175, 210)'}
                  color={'#dad8d8'}
                  type='submit'
                >
                  Create Account
                </Button>
            </Box>
          </form>
        </FormControl>
    </Flex>
    </Stack>
  )
}

export default SignUp