import { Box, Button, Checkbox, FormControl, FormHelperText, Heading, Input, Select, Textarea } from '@chakra-ui/react'


const RegForm = ({err,userData,handleChange,handleSubmit}) => {
 
  return (
              <FormControl 
                  width={'100%'}
                  display={'flex'} 
                  justifyContent={'center'} 
                  flexDirection={'column'} 
                  alignItems={'center'}  
                  >
        <Heading 
              fontSize={{base:'23px', md:'40px', lg:'40px'}} 
              textAlign={'center'}
              width={'100%'}
              color={'rgb(29, 175, 210)'}>Become A Techathonian</Heading>
       <form onSubmit={handleSubmit} style={{width:'80%'}}>
            
            <Input 
                  variant={'flushed'} 
                  marginTop={'15px'}
                  width={'100%'} 
                  borderBottom={'1px'} 
                  padding={'10px'} 
                  borderColor={'rgb(29, 175, 210)'} 
                  type='text' 
                  color={'#000'} 
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
                color={'#000'} 
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
                color={'#000'} 
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
                  color={'#000'}  
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
                  color={'#000'} 
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
                  color={'#000'}  
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
                  color={'#000'} 
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
                    color={'#000'} 
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
  )
}

export default RegForm