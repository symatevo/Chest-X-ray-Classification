import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import AWS from 'aws-sdk';
import axios from 'axios';

const S3_BUCKET = 'test2603';
const REGION = 'us-east-1';

AWS.config.update({
  accessKeyId: 'AKIA6E3TQXG5EFB4ORNZ',
  secretAccessKey: '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',
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

function TryNow() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, toggleLoading] = useState(false);
  const [report, setReport] = useState(null);
  const handleImageUpload = async (event) => {
    toggleLoading(true);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      const response = await uploadFile(file);
      const imageUrl = 'https://test2603.s3.amazonaws.com/' + file.name;
      axios({
        method: 'POST',
        url: 'http://127.0.0.1:5000/predict',
        data: { imageUrl },
      }).then((response) => {
        console.log(response);
        setReport(response.data);
        toggleLoading(false);
      });
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const uploadFile = (file) => {
    const params = {
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    return myBucket.putObject(params).promise();
  };

  return (
    <Box mt={32}>
      <Navbar />
      <Container>
        <Center mb={6}>
          <Heading>Upload your X-Ray image to get description</Heading>
        </Center>
        <Box mb={6}>
          <Input
            type='file'
            accept='image/*'
            onChange={handleImageUpload}
            w='300px'
          />
        </Box>

        {selectedImage ? (
          <Center>
            <Box>
              <Image boxSize='400px' objectFit='cover' src={selectedImage} />
            </Box>
          </Center>
        ) : (
          <Center>
            <Box w='400px' h='400px' bg='gray.200' />
          </Center>
        )}
        {report && (
          <Box mt={4}>
            <Heading>Image Report: </Heading>
            <Text>{report}</Text>
          </Box>
        )}
        {isLoading && (
          <Flex justifyContent='center' alignItems='center' flexDir='column'>
            <Text>Generating Report</Text>
            <Spinner />
          </Flex>
        )}
      </Container>
      {/* <Button
        onClick={() => {
          axios
            .post('http://127.0.0.1:5000/predict', { name: 'SYUZI' })
            .then((response) => {
              console.log(response.data);
              // Handle the response data here
            })
            .catch((error) => {
              console.log(error);
              // Handle the error here
            });
        }}
      >
        SYUZ
      </Button> */}
    </Box>
  );
}

export default TryNow;
