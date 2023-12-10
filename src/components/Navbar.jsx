import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import SignUpForm from './SignupForm';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bgGradient='linear-gradient(to bottom, #293246, #0a0e15)'
      color='white'
      position='fixed'
      top={0}
      w='100%'
      zIndex={10}
    >
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <SignUpForm />
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' colorScheme='blue' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button>Continue</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex maxW='6xl' mx='auto' py={6} px={6} align='center'>
        <Box>
          <Text fontSize='xl' fontWeight='bold' as={Link} to='/'>
            My Website
          </Text>
        </Box>
        <Spacer />
        <Box display={{ base: 'none', md: 'block' }}>
          <Flex align='center'>
            <Text as={Link} mr={6}>
              Products
            </Text>
            <Text as={Link} mr={6}>
              Our Impact
            </Text>
            <Text as={Link} mr={6}>
              Blog
            </Text>
            <Text as={Link} mr={6}>
              About Us
            </Text>
            <Text as={Link} mr={6}>
              Contact Us
            </Text>
            <Text as={Link} mr={6}>
              Region
            </Text>
            <Button
              colorScheme='white'
              size='md'
              variant='outline'
              mr={4}
              onClick={onOpen}
            >
              Sign Up
            </Button>
            <Link to='/try-now'>
              <Button colorScheme='blue' size='md'>
                Try Now
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box display={{ base: 'block', md: 'none' }}>
          <Link to='/try-now'>
            <Button colorScheme='blue' size='md'>
              Try Now
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
