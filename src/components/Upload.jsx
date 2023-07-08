import { Button, Container, HStack, Heading, Input, VStack, color,Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineUpload,AiOutlineCloudUpload} from 'react-icons/ai'
 
const Upload = () => {
  return (
   <Container maxW={'container.xl'} h={'100vh'} p={'20'}>
    <VStack justifyContent={'center'} h={'20'}>
    <Heading size={'md'} justifyContent={'center'} margin={'auto'}>
        The following uploads will be checked by the authorities of V-Tube
    </Heading>
    <Text>Video if passed all checklist will be uploaded in 5-6 hours</Text>
    </VStack>
    <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>

    <AiOutlineCloudUpload size={'10vmax'} color='purple'/>

    <form>
        <HStack>
            <Input required type='file' css={{
                "&:: file-selector-button":{
                    border:"None",
                    width:"calc(100% + 36px)",
                    height:"100%",
                    marginLeft:"-18px",
                    color:'purple',
                    backgroundColor:'white',
                    cursor:'pointer'
                }
            }}>
            </Input>
                <Button type='submit' colorScheme='purple'>Upload</Button>
        </HStack>

    </form>
    </VStack>

   </Container>
  )
}

export default Upload