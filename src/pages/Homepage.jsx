import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { Link as RouterLink } from 'react-router-dom';

function Homepage() {
  return (
    <Box bgGradient='linear-gradient(to bottom, #293246, #0a0e15)'>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Box
        h='100vh'
        bg='gray.100'
        overflow='hidden'
        position='relative'
        mt={16}
      >
        <video
          src='./background.mp4'
          autoPlay
          loop
          muted
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
        <Flex
          maxW='6xl'
          mx='auto'
          h='100%'
          px={6}
          direction={['column', 'row']}
          zIndex={2}
          position='absolute'
          top={0}
          color='white'
          left={0}
          right={0}
        >
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            maxW='6xl'
            mx='auto'
          >
            <Heading size='2xl' mb={4}>
              Medical AI App
            </Heading>
            <Box fontSize='xl' mb={4}>
              Revolutionizing the healthcare industry with AI-powered solutions.
            </Box>
            <RouterLink to='/try-now'>
              <Button colorScheme='blue'>Try Now</Button>
            </RouterLink>
          </Box>
          <Spacer />
        </Flex>
      </Box>

      {/* Images Section */}
      <Box py={20}>
        <Flex maxW='6xl' mx='auto' px={6} wrap='wrap'>
          <Box flex='1' px={2} mb={4}>
            <Image
              w='300px'
              height='200px'
              objectFit='cover'
              src='https://healthitanalytics.com/images/site/article_headers/_normal/ThinkstockPhotos-513688464.jpg'
            />
          </Box>
          <Box flex='1' px={2} mb={4}>
            <Image
              w='300px'
              height='200px'
              objectFit='cover'
              src='https://hitinfrastructure.com/images/site/article_headers/_normal/Intraoperative_imaging.jpg'
            />
          </Box>
          <Box flex='1' px={2} mb={4}>
            <Image
              w='300px'
              height='200px'
              objectFit='cover'
              src='https://viso.ai/wp-content/uploads/2021/08/computer-vision-in-healthcare.jpg'
            />
          </Box>
          <Box flex='1' px={2} mb={4}>
            <Image
              w='300px'
              height='200px'
              objectFit='cover'
              src='https://wp.technologyreview.com/wp-content/uploads/2022/09/GettyImages-1173763716-crop.jpeg'
            />
          </Box>
        </Flex>
      </Box>
      <Divider maxW='6xl' mx='auto' colorScheme='whiteAlpha' />
      {/* Feature Section */}

      <Box py={20} color='white'>
        <Flex maxW='6xl' mx='auto' px={6} direction={['column', 'row-reverse']}>
          <Box flex='1'>
            <Image
              w='400px'
              src='https://www.cogitotech.com/wp-content/uploads/2022/12/Medical-1.webp'
              mb={6}
            />
            <Heading size='lg' mb={4}>
              Our Awesome Feature
            </Heading>
            <Box fontSize='xl' mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              lorem ac risus ullamcorper venenatis.
            </Box>
            <Link href='#' color='teal.500'>
              Learn More
            </Link>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box
        bgGradient='linear-gradient(to bottom, #293246, #0a0e15)'
        color='white'
        py={8}
      >
        <Flex maxW='6xl' mx='auto' px={6} align='center'>
          <Box>
            <Heading size='lg'>My Website</Heading>
            <Box mt={4}>Copyright © 2023</Box>
          </Box>
          <Spacer />
          <Box>
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
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Homepage;
