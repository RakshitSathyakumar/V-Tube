import React, { useState } from 'react';
import { Stack, VStack, Heading, Text, Box, Button } from '@chakra-ui/react';
const Videos = () => {
  const videosArr = [
    [
      'https://www.youtube.com/embed/GRo32Ug22HY',
      'Michael vs Toby - The Office US',
    ],
    [
      'https://www.youtube.com/embed/gyKmICnNRhs',
      'Friends: Phoebe Discovers Monica and Chandler',
    ],
    ['https://www.youtube.com/embed/4LuBVXWpDss', 'Burj Khalifa, Dubai'],
    [
      'https://www.youtube.com/embed/Tuw8hxrFBH8',
      'One of the Greatest Speeches Ever | Steve Jobs',
    ],
  ];
  const [videoSrc, setVideoSrc] = useState(videosArr[0][0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <Box
          as="iframe"
          src={videoSrc}
          width="100%"
          allow="autoplay"
          sx={{
            aspectRatio: '16/9',
          }}
        />
        <VStack p={'4'} w={'full'} alignItems={'flex-start'} overflowY={'auto'}>
          <Heading>Samples</Heading>
          <Text>For for content Subscribe to our services</Text>
        </VStack>
      </VStack>

      <VStack w={['full', 'xl']} alignItems={'stretch'} p={'6'}>
        <Heading>Sample Videos</Heading>
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'green'}
            onClick={() => setVideoSrc(item[0])}
          >
            {item[1]}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
