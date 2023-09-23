'use client'

import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { Container, Button, ButtonGroup, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import {navItems} from '@components/NavigationMenu'

const contactLinks = [
  {name: 'Email', href: 'mailto:antoniomasonry123@gmail.com', content: 'Email Us Today', icon: <AiOutlineMail/>},
  {name: 'Phone', href: 'tel:7859253879', content: 'Call us Today', icon: <AiOutlinePhone/>}
]

export function Footer(){
  return(
    <footer style={{backgroundColor: 'white'}}>
      <Container
        display={'flex'}
        flexDir={'column'}
        gap={5}
        justifyContent={'center'}
        alignItems={'center'}
        py={12}
      >
        <Link href={'/'}>
        <Image src='/Logo-Final.png' alt='Logo that takes you to the homepage'
          width={500}
          height={500}
          style={{width: 'auto', height: '80px'}}
        />
        </Link>
        <ButtonGroup>
          {
            navItems.map((link, index)=>(
              <Button key={link.name + index} as={'a'} href={link.href} colorScheme={'blackAlpha'} variant={'outline'}>{link.name}</Button>
            ))
          }
        </ButtonGroup>
        <ButtonGroup>
          {
            contactLinks.map((item, index)=>(
              <Button key={item.name + index} as={'a'} href={item.href} colorScheme='orange' leftIcon={item.icon} >{item.content}</Button>
            ))
          }
        </ButtonGroup>
        <Text>Website Created by <Link href='juanrios.vercel.app' style={{color: 'blueViolet'}}>Juan Rios</Link></Text>

      </Container>
    </footer>
  )
}
