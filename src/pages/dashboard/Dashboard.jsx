import React,{useState,useEffect} from 'react'
import {Box,Heading,List,ListItem, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react'
import Navbar from '../../components/navbar/Navbar';
import {Link} from 'react-router-dom';

const Dashboard = () => {
  const [userDisplaDetails,setUserDisplaDetails] = useState([])
  useEffect(()=>{
     const user = JSON.parse(sessionStorage.getItem('user'))
     setUserDisplaDetails(user)
     console.log(user.password)
  
},[])
  return (
    <Box>
        <Navbar>
            <List display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Link to='/login'><ListItem>Log Out</ListItem></Link>
            </List>
        </Navbar>
    <TableContainer >
      <Heading marginBottom={'40px'} textAlign={'center'}>Welcome : {userDisplaDetails.firstName}</Heading>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th> Date of Birth</Th>
        <Th>Description</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>{userDisplaDetails.firstName} {userDisplaDetails.lastName}</Td>
        <Td>{userDisplaDetails.email}</Td>
        <Td >{userDisplaDetails.age}</Td>
        <Td>{userDisplaDetails.describe}</Td>
      </Tr>
      </Tbody>
  </Table>
</TableContainer>
    </Box>
  )
}

export default Dashboard