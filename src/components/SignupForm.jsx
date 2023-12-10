import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    region: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // TODO: Implement form submission logic
  };

  return (
    <Box maxW='md' mx='auto' py={10} px={6}>
      <Heading mb={6}>Sign Up</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id='name'>
            <FormLabel>Name</FormLabel>
            <Input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl id='region'>
            <FormLabel>Region</FormLabel>
            <Input
              type='text'
              name='region'
              value={formData.region}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl id='email'>
            <FormLabel>Email address</FormLabel>
            <Input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              minLength={8}
              required
            />
          </FormControl>
          <FormControl id='confirmPassword'>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type='password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleInputChange}
              minLength={8}
              required
            />
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
}

export default SignUpForm;
