import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

import {Flex} from '@chakra-ui/react'
import RegForm from './components/RegForm';



const SignUp = () => {
  const navigate = useNavigate()

    const  userInput =[
         {
    firstName:'',
    lastName:'',
    email:'',
    stack:'',
    experience:'',
    gender:'',
    beginner:'',
    intermediate:'',
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
   const [isSubmit,setIsSubmit] =useState(false);
   const [err,setErr] =useState({});

const handleChange = (e)=>{
  //get user inputs
   const {name,value,checked,type} = e.target
    setUserData({...userData,[name]:type === 'checkbox' ? checked : value})  
}

// console.log(userData)
const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(JSON.stringify(userData))


  //  navigate('/login')
    
    //called the err function here
    setErr(validates(userData))
    setIsSubmit(true)
}
useEffect(()=>{
  console.log(err)

    if(Object.keys(err).length === 0 && isSubmit){
      const user = JSON.stringify(userData)
      console.log(user)
      
     sessionStorage.getItem('user') === null &&
     sessionStorage.setItem('user', user) 

     navigate('/login')
     
  }

},[err])

const validates =(values)=>{
  const error ={}
  const regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
  
if(!values.firstName){
  error.firstName = "First Name is required"
}
if(!values.lastName){
  error.lastName = "Last Name is required"
}
// if(!values.age){
//   error.age = "Select your date of birth"
// }
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
if(!values.experience){
  error.experience = "Select your experience level"
}
if(!values.gender){
  error.gender = "Select your gender"
}
if(!values.stack){
  error.stack = "Select your gender"
}
if(!values.age){
  error.age = "Select DOB"
}


return error
}

  return (
    <Flex 
           fontFamily={'Manrope'}
          min-height={'100vh'} 
          paddingBottom={'50px'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'} 
          background={'#e7e7d8'}>
          {/* background={'rgb(14, 25, 71)'}> */}
    
      <RegForm 
            err={err} 
            userData={userData} 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            />
    </Flex>
  )
}

export default SignUp