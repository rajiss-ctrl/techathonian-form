import { Box, Button, Checkbox, FormControl, FormHelperText, Heading, Input, Select, Textarea } from '@chakra-ui/react'


const RegForm = ({err,userData,handleChange,handleSubmit}) => {
 
return (
    <FormControl 
      width={['100%','100%','100%','50%','','50%']}
      fontFamily={'Manrope'}
      display={'flex'} 
      justifyContent={'center'} 
      flexDirection={'column'} 
      alignItems={'center'}  
      >
        <Heading 
        padding={"30px"}
              fontSize={{base:'23px', md:'40px', lg:'40px'}} 
              textAlign={'center'}
              width={'100%'}
              color={'rgb(29, 175, 210)'}>Become A Techathonian</Heading>
       <form onSubmit={handleSubmit} style={{width:'90%', background:'#FFFFFF',padding:"20px"}}>
            
            <Input  
                  marginTop={'15px'}
                  width={'100%'} 
                  padding={'10px'}  
                  type='text' 
                  color={'#000'} 
                  name='firstName' 
                  value={userData.firstName} 
                  onChange={handleChange} 
                  placeholder='First Name' />
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.firstName}</FormHelperText>
            
          
          <Input 
                marginTop={'15px'}
                width={'100%'} 
                padding={'10px'}  
                type='text' 
                color={'#000'} 
                onChange={handleChange} 
                name='lastName' 
                value={userData.lastName} 
                placeholder='Last Name' />
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.lastName}</FormHelperText>
          
          <Input 
                type='email' 
                width={'100%'}
                marginTop={'15px'}
                padding={'10px'}  
                color={'#000'} 
                onChange={handleChange} 
                name='email' 
                value={userData.email} 
                placeholder='Your Email' />
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.email}</FormHelperText>

          <Input 
                type='text' 
                width={'100%'}
                marginTop={'15px'}
                padding={'10px'}  
                color={'#000'} 
                onChange={handleChange} 
                name='stack' 
                value={userData.stack} 
                placeholder='Your Stack' />
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.stack}</FormHelperText>
            <Select 
                  border={'none'} 
                  width={'100%'}
                  marginTop={'15px'}   
                  color={'#000'}
                  value={userData.experience}
                  name='experience'  
                  onChange={handleChange}
                  select
                  
                  >
                <option color={'grey'}  value={""}>Experience</option>
                <option color={'grey'}  value={"beginner"}>Beginner</option>
                <option color={'grey'}  value={"intermediate"}>Intermediate</option>
            </Select>
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.experience}</FormHelperText>
      
            <Select 
                  border={'none'} 
                  width={'100%'}
                  marginTop={'15px'}   
                  color={'#000'}
                  value={userData.gender}
                  name='gender'  
                  onChange={handleChange}
                  select
                  
                  >
                <option color={'grey'}  value={""}>Gender</option>
                <option color={'grey'}  value={"male"}>Male</option>
                <option color={'grey'}  value={"female"}>Female</option>
                <option color={'grey'}  value={"others"}>Others</option>
            </Select>
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.gender}</FormHelperText>
                    
            <Input 
                  marginTop={'15px'} 
                  padding={'10px'} 
                  width={'100%'}
                  color={'#000'} 
                  onChange={handleChange} 
                  type='date' 
                  name='age' 
                  value={userData.age}
                   
                  placeholder='Your Age'/>
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.age}</FormHelperText>
           
            <Input 
                  marginTop={'15px'} 
                  padding={'10px'}
                  width={'100%'} 
                  color={'#000'}  
                  onChange={handleChange} 
                  type='password' 
                  name='password' 
                  value={userData.password} 
                  placeholder='Password' />
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.password}</FormHelperText>
            

            <Input  
                  marginTop={'15px'} 
                  padding={'10px'}
                  width={'100%'}  
                  color={'#000'} 
                  onChange={handleChange} 
                  type='password' 
                  name='confirmP' 
                  value={userData.confirmP} 
                  placeholder='confirm Password' />
            <FormHelperText color={'red'} paddingLeft={'10px'}>{err.confirmP}</FormHelperText>

            
            <Textarea  
                    marginTop={'15px'} 
                    padding={'10px'} 
                     width={'100%'}
                    color={'#000'} 
                    onChange={handleChange} 
                    name='describe' 
                    value={userData.describe} 
                    placeholder='Describe Yourself (30 words)' />
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
  )
}

export default RegForm