import { Box ,Button,HStack,Heading,Stack, VStack,Input ,Text } from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom'
import {useEffect} from 'react';
import {AiOutlineSend} from 'react-icons/ai'
const footer = () => {



  return (
    <Box
      bgColor={'blackAlpha.900'}
      minH={'40'}
      color={'white'}
      p={'16'}
    >
      <Stack direction={['column','row']}>
        <VStack w={'65%'} alignItems={'stretch'} p={'2'}>
          <Heading  size={'sm'} textTransform={'uppercase'} justifyContent={'center'} m={'auto'}>
           For Updates
          </Heading>
          <HStack  py={'4'}>
          <Input placeholder='Enter Email' size='sm ' border={'none'} outline={'none'}/>
            <Button colorScheme='green' variant={'ghost'}>
              <AiOutlineSend size={'20'}/>
            </Button>
          </HStack>
        </VStack>

        <VStack w={'full'} textAlign={'center'}>
        <Link to={'/'}>
        <Heading colorScheme='Green'>V-Tube</Heading>
        </Link>
       
        <Text>One stop solution for all your video libraray </Text>
        </VStack>

        <VStack w={'65%'}>
        <Heading size={'sm'}>Social Handels</Heading>
        <Button variant={'link'} colorScheme={'white'} textDecoration={'none'}>
          <a href="https://github.com/RakshitSathyakumar" target="_blank">GitHub</a>
        </Button>
        </VStack>

      </Stack>
    </Box>
  );
};

export default footer;
