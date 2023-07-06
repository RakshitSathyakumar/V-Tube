import React from 'react';
import { Box, Heading, Image ,Text ,Container,Stack } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/career2.png';
import img3 from '../assets/cooking.jpg';
import img4 from '../assets/travelVlog.jpg';
import imgSt from '../assets/office.jpg';
import img5 from '../assets/5.png'
import imgF from '../assets/friends.jpg';

const headingOptions = {
  pos: 'absolute',
  left: '20%',
  top: '20%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '2.2xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(55deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
          </Text>
        </Stack>
      </Container>

    </Box>
  );
};

const MyCarousel = () => {
  return (
    //   <div>Hi</div>

    <Carousel
      autoPlay
      infiniteLoop
      interval={7500}
      showArrows={false}
      showThumbs={false}
      showStatus={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={imgF} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch your Favoutite Friends!
        </Heading>
      </Box>

      <Box w="full" h={'100vh'}>
        <Image src={imgSt} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.50'} color={'white'} {...headingOptions}>
          Watch your Favoutite sitcom!
        </Heading>
      </Box>

      <Box w="full" h={'100vh'}>
        <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Litsen to amazing podcasts
        </Heading>
      </Box>

      <Box w="full" h={'100vh'}>
        <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch Travel Vlogs!
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
