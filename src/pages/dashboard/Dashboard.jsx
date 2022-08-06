import React,{useState,useEffect} from 'react'
import {Flex,Box,Button,Heading, VStack,Text} from '@chakra-ui/react'
import {  useNavigate } from 'react-router-dom'



const Dashboard = () => {
  const navigate = useNavigate()
  const [userDisplaDetails,setUserDisplaDetails] = useState([])
  useEffect(()=>{
     const user = JSON.parse(sessionStorage.getItem('user'))
     setUserDisplaDetails(user)
  
  
},[])
  return (
    <Box width={'100%'} padding={{base:'60px', md:'30px'}}>

    <VStack width={'100%'} >
      <Heading marginBottom={'40px'} textAlign={'center'}>Welcome : {userDisplaDetails.firstName}</Heading>
      <Box>
        <Box width={'100%'}>
          <Box width={'100%'} display={'flex'} alignItems={'center'}><Heading fontSize={{base:'12px', md:'23px'}} marginRight={'10px'}>Name:</Heading> <Text>{userDisplaDetails.firstName} {userDisplaDetails.lastName}</Text>  </Box>
          <Box width={'100%'} display={'flex'} alignItems={'center'}><Heading fontSize={{base:'12px', md:'23px'}} marginRight={'10px'}>Email:</Heading> <Text>{userDisplaDetails.email}</Text> </Box>
          <Box width={'100%'} display={'flex'} alignItems={'center'}><Heading fontSize={{base:'12px', md:'23px'}} marginRight={'10px'}>Date of Birth:</Heading> <Text>{userDisplaDetails.age}</Text>  </Box>
          <Box width={'100%'} ><Heading fontSize={{base:'12px', md:'23px'}}color={'red'}>Description</Heading><Text padding={'10px'} marginTop={'20px'} marginBottom={'20px'} borderColor={'green'} border={'1px solid'}>{userDisplaDetails.describe}</Text> </Box>
      </Box>
      </Box>
  
</VStack>

<Flex justifyContent={'center'} >
  <Button 
          background={'blue'}
          color={'white'} 
          onClick={()=>{
          sessionStorage.removeItem('user')
          sessionStorage.removeItem('authUser')
          navigate('/')
          }}>Log Out</Button>
</Flex>
    </Box>
  )
}

export default Dashboard