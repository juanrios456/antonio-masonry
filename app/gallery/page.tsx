'use client'
import { Container, Text, SimpleGrid, Heading, Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Image from 'next/image'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Image Gallery',
  description: 'Image gallery for Antonio masonry and stucco showcasing the many jobs that have been completed.'
}

let stoneImageArray:any = [];
let curveImageArray:any = []
let stoneAlt = [
  'Kitchen with stone detail',
  'Wall of stone with Kstate wildcat in the center',
  'House with stone bottom half stone and top half painted black',
  'Walls with stone columns',
  'Front Door with stone walls around it',
  'Walls with stone columns',
  'Walls with stone columns',
  'Kitchen with decorative stone around it',
  'Gate Edge that is also a mailbox with stone all around',
  'Mailbox made with stone all around it'
];
let curveAlt = [
  'Curve 1',
  'Curve 2',
  'Curve 3',
  'Curve 4',
];

function buildImageArrayJPG(altList:any, arrayName:any, path:any){
  let i = 1
  
  altList.forEach((alt:any) => {
    arrayName.push([path + i + '.jpg', alt])
    i++
  });
  return arrayName;
}

function buildImageArrayPNG(altList:any, arrayName:any, path:any){
  let i = 1
  
  altList.forEach((alt:any) => {
    arrayName.push([path + i + '.png', alt])
    i++
  });
  return arrayName;
}

const stoneImages = buildImageArrayJPG(stoneAlt, stoneImageArray, '/stone/stone-example-');

const copyStone = [...stoneImages];

export default function Gallery(){

  return(
    <>
      <Container display="grid" gridRowGap={1} py={10} >
        <Heading textAlign={'center'} mb={4} >Welcome to Antonios Gallery of Previous Projects</Heading>
        <Text>Here you will see all the different types of projects we have completed</Text>
        <Text>To view a mix of all our projects click the <Box borderRadius={'md'} bg='orange' as={'span'} px={2}>All</Box> button below.</Text>
        {
          ['Stone', 'Brick', 'Stucco'].map((item, index)=>(
            <Text key={index + ' gallery'}>To view all of the {item} Projects click the <Box borderRadius={'md'} bg='orange' as={'span'} px={2} >{item}</Box> button below</Text>
          ))
        }
      </Container>

      <Tabs>
        <TabList
          display={'flex'}
          justifyContent={'center'}
        >
          <Tab>All</Tab>
          <Tab>Stone</Tab>
          <Tab>Brick</Tab>
          <Tab>Stucco</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Heading>Mix of All Pictures</Heading>
            <SimpleGrid
              minChildWidth={'250px'}
              spacing={'25px'}
              py={10}
            >

            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <Heading>Example of All Stone Projects</Heading>
            <SimpleGrid
              minChildWidth={'250px'}
              spacing={'15px'}
              py={10}
            >
              {
                stoneImages.map((image:any, index:number)=>(
                <Box height={'200px'} key={index + 'Stone'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                  <Image src={image[0]} alt={image[1]}
                    width={900}
                    height={800}
                    style={{width: '100%', height: '100%', objectFit: 'contain'}}
                  />
                </Box>
                ))
              }
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>Four!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
