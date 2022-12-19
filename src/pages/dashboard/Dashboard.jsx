import React,{useState,useEffect} from 'react'
import {Flex,Box,Button,Heading, Table,Text, Image,TableCaption,Th,Tr,Thead,Tbody,Td} from '@chakra-ui/react'
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
    <Box fontFamily={'Manrope'} background={'#e7e7d8'} height={'100vh'} width={'100%'} padding={['20px','20px','30px','60px','60px']}>

    <Box width={'100%'} >
      <Heading marginBottom={'40px'}>Welcome : {userDisplaDetails.firstName}</Heading>
      <Box>
        <Heading  fontSize={'20px'}>Profile</Heading>
  <Box width={['100%','100%','100%','80%','50%']} >

    <Box width={['100%','100%','100%','80%','80%']}  marginTop={'10px'}>
        <Heading borderBottom={'1px'} borderColor={'grey'} marginBottom={'10px'} width={'100%'}  fontSize={['12px']} display={'flex'} justifyContent={'flex-start'} gap={'20px'}>
          <Text  width={'30%'} fontSize={['12px','12px','14px','20px','20px']}>Full Name</Text>
          <Text  width={'70%'} color={'grey'} fontSize={['12px','12px','14px','20px','20px']}>
          {userDisplaDetails.firstName} {userDisplaDetails.lastName}
          </Text>
        </Heading>
        <Heading borderBottom={'1px'} borderColor={'grey'} marginBottom={'10px'} width={'100%'} display={'flex'} justifyContent={'flex-start'} gap={'20px'} fontSize={['12px']}>
          <Text width={'30%'} fontSize={['12px','12px','14px','20px','20px']}> E Mail</Text>
          <Text width={'70%'} color={'grey'} fontSize={['12px','12px','14px','20px','20px']}>
          {userDisplaDetails.email}
          </Text>
        </Heading>
        <Heading borderBottom={'1px'} borderColor={'grey'} marginBottom={'10px'} width={'100%'} display={'flex'} justifyContent={'flex-start'} gap={'20px'} fontSize={['12px']}>
          <Text  width={'30%'} fontSize={['12px','12px','14px','20px','20px']}>Date Of Birth</Text>
          <Text  width={'70%'} color={'grey'} fontSize={['12px','12px','14px','20px','20px']} >
            {userDisplaDetails.age}
          </Text>
        </Heading>
    </Box>

  </Box>

        <Box width={'100%'}   display={'flex'} justifyContent={'space-around'} flexDir={['column','column','column','row','row']}>
          <Box padding={'10px'} width={'50%'} display={'grid'} placeContent={'left'}>
            <Text fontSize={'30px'}>{userDisplaDetails.stack}</Text>
            <Text fontSize={'30px'}>{userDisplaDetails.experience}</Text>
          </Box>

          <Box width={['100%','100%','100%','50%','50%']} background={'#FFFFFF'} padding={'20px'} borderRadius={'10px'}>
            <Heading fontSize={{base:'12px', md:'23px'}}color={'red'}>
              About Me
            </Heading>
          <Text  marginTop={'20px'} marginBottom={'20px'}>
            {userDisplaDetails.describe}
            </Text> 
          </Box>
      </Box>
      </Box>
  
</Box>


{/* <Heading textAlign={'center'} fontSize={'24px'}>TECHATHON RESTAURANT</Heading>
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
  </Flex> */}
<Flex justifyContent={'center'} marginTop={'50px'} >
  <Button 
          background={'red'}
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