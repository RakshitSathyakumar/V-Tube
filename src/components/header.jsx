import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
      zIndex={'overlay'}
        h={'10'}
        w={'10'}
        p={'0'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'green'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'25'} zIndex={'overlay'}/>
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>V-Tube</DrawerHeader>

        <VStack>
          <Button  onClick={onClose} colorScheme='green' variant={'ghost'}>
            <Link to={'/'}>Home</Link>
          </Button>

          <Button  onClick={onClose} colorScheme='green' variant={'ghost'}>
            <Link to={'/videos'}>Videos</Link>
          </Button>


          <Button onClick={onClose} colorScheme='green' variant={'ghost'}>
            <Link to={'/videos?category=free'}>Free Videos</Link>
          </Button>


          <Button  onClick={onClose} colorScheme='green' variant={'ghost'}>
            <Link to={'/upload'}>Upload</Link>
          </Button>

          <Button onClick={onClose}  colorScheme='green' variant={'ghost'}>
            <Link to={'/premium'}>Premium</Link>
          </Button>

        </VStack>


        <HStack pos={'absolute'} bottom={'8'} left={'0'} w={'full'} justifyContent={'space-evenly'}>

          <Button onClick={onClose}  colorScheme='green' variant={'solid'}>
            <Link to={'/login'}>login</Link>
          </Button>

          <Button onClick={onClose}  colorScheme='green' variant={'outline'}>
            <Link to={'/sign-up'}>sign up</Link>
          </Button>

        </HStack>

        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
