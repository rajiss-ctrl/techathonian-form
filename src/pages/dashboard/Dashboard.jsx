import React,{useState,useEffect} from 'react'
import {Flex,Box,Button,Heading, VStack,Text, Image} from '@chakra-ui/react'
import {  useNavigate } from 'react-router-dom'



const Dashboard = () => {
  const navigate = useNavigate()
  const [userDisplaDetails,setUserDisplaDetails] = useState([])
  const [apiData, setApiData] = useState([])
  const url = 'https://random-data-api.com/api/restaurant/random_restaurant?size=8'
  const restaurant = async () =>{
      const res = await fetch(url);
      const data = await res.json();
      setApiData(data)
  }

  useEffect(()=>{
     restaurant()
},[])
  useEffect(()=>{
     const user = JSON.parse(sessionStorage.getItem('user'))
     setUserDisplaDetails(user)
},[])

console.log(apiData)
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


          <Heading textAlign={'center'} fontSize={'24px'}>TECHATHON RESTAURANT</Heading>
<Flex  flexWrap={'wrap'}>
  {apiData.map((item)=>{
    return (
 <Box key={item.id} padding={'20px'} width={'300px'}>
  <Heading >{item.name}</Heading>
  <Text >Address:-{item.address}</Text> 
  <Image src={item.logo} width={'200px'} alt='restaurant'/>
  <Heading fontSize={'16px'}>Phone: {item.phone_number}</Heading>
 </Box>
    )
  })}
  </Flex>
      <Flex justifyContent={'right'} >
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