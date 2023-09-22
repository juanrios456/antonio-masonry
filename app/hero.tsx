'use client'

import { Box, Container, Text, Heading, Button } from "@chakra-ui/react";
import { RevealOnScroll } from "@components/ScrollTransitions";
import css from '@styles/hero.module.css'
import Image from "next/image";

export function Hero(){
  return(
    <Box
     bgGradient='linear(to-b, rgb(32,30,30) , rgb(0,0,0,0.0))'
     h={'700px'}
     display={'flex'}
     flexDir={{base: 'column-reverse', md: 'row'}}
     justifyContent={'space-evenly'}
    >
      <Container
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        w={{base: '100%', md:'60%'}}
        maxW={{base: '500px', md: 'none'}}
      >
        <RevealOnScroll variant={'slide-right'} >
          <Image src='/stone/stone-example-1.jpg' alt="Outdoor kitchen with stone around the walls"
            priority
            width={900}
            height={800}
            className={css.image}
          />
        </RevealOnScroll>
      </Container>
      <Container
        w={{base: '100%', md:'40%'}}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <RevealOnScroll variant="slide-left">
        <Box
          maxW={'444px'}
          display={'flex'}
          flexDir={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          textColor={'#f7f7f7'}
        >
          <Heading textAlign={'center'} fontSize={'5xl'} mb={5}>Antonios Masonry and Stucco</Heading>
          <Text fontSize={'lg'} maxW={'333px'} mb={2} >Kansas stone contractor, taking on all projects for all masonry and stucco needs no matter how big or small!</Text>
          <Button colorScheme={'linkedin'}>
            Contact Us
          </Button>
        </Box>
        </RevealOnScroll>
      </Container>

    </Box>
  )
}