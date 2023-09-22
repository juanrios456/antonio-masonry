'use client'

import { Box, Container, Heading, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import css from '@styles/services.module.css'
import { RevealOnScroll } from "@components/ScrollTransitions";

const stoneList = [
  'Topeka Local Contractor',
  'Residential and Commercial Projects',
  'Over 15 Years of Experience',
  'Good Turn Around Time'
];

const stuccoList = [
  'EIFS has Increased Fiberglass Durability',
  'Increased Insulation',
  'Reduced Air Inflation by over 55%'
];


export function Services(){
  return(
  <>
    <Stone/>
    <Stucco/>
    <Chimney/>
  </>
  )
}

function Stone(){
  return(
    <ServicesContainer>
      <Image src='/curve-1.png' alt="Background curve for stone section"
        width={900}
        height={800}
        className={css.curve1}
      />
      <TextContainer>
        <Box
          bgColor={'#D3C4B2'}
          borderRadius={'15px'}
          p={'10'}
        >
        <Heading mb={5}>Veneer Stone</Heading>
        <UnorderedList>
          {
            stoneList.map((item, index) =>(
              <ListItem mb={1} key={index + 'Stone'}>{item}</ListItem>
            ))
          }
        </UnorderedList>
        </Box>
      </TextContainer>
      <ImageContainer>
        <Image src='/stone/stone-example-3.jpg' alt="Final result of stone work"
          width={900}
          height={800}
          className={css.image}
        />
      </ImageContainer>
    </ServicesContainer>
  )
}

function Stucco(){
  return(
    <ServicesContainer>
      <Image src='/curve-2.png' alt="first background curve for stucco section"
        width={900}
        height={800}
        className={css.curve2}
      />
      <Image src='/curve-3.png' alt="second background curve for stucco section"
        width={900}
        height={800}
        className={css.curve3}
      />
      <ImageContainer>
        <Image src='/stone/stone-example-5.jpg' alt="Final Result of stucco work"
          width={900}
          height={800}
          className={css.image}
        />
      </ImageContainer>
      <TextContainer>
        <Heading mb={5}>Benefits of Stucco Siding</Heading>
        <UnorderedList>
          {
            stuccoList.map((item, index) =>(
              <ListItem mb={1} key={index + 'Stucco'}>{item}</ListItem>
            ))
          }
        </UnorderedList>
      </TextContainer>

    </ServicesContainer>
  )
}

function Chimney(){
  return(
    <ServicesContainer>
      <Image src='/curve-4.png' alt="background curve for chimney section"
        width={900}
        height={800}
        className={css.curve4}
      />
      <TextContainer>
        <Heading mb={5}>Chimney Experience</Heading>
        <Text>
          Years of experience building chimneys and 
          giving them a nice finishing touch of stone / brick of your choice.
        </Text>
      </TextContainer>
      <ImageContainer>
        <Image src={'/stone/stone-example-9.jpg'} alt="Final result of stone work"
          width={900}
          height={800}
          className={css.image}
        />
      </ImageContainer>
    </ServicesContainer>
  )
}

function ServicesContainer({children}:any){
  return(
    <Box
      position={'relative'}
      h={'650px'}
      display={'flex'}
      flexDir={{base: 'column', lg: 'row'}}
      justifyContent={'space-evenly'}
    >
      {children}
    </Box>
  )
}

function ImageContainer({children}:any){
  return(
    <Container
        maxW={'none'}
        w={{base: '100%', lg: '60%'}}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <RevealOnScroll>
          {children}
        </RevealOnScroll>
    </Container>
  )
}

function TextContainer({children}:any){
  return(
    <Container
        maxW={'400px'}
        w={{base: '100%', lg: '40%'}}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <RevealOnScroll>
        <Box>
          {children}
        </Box>
        </RevealOnScroll>
      </Container>
  )
}