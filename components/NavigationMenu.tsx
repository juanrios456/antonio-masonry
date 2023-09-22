'use client'
import { Container, Button, Drawer, DrawerBody, DrawerOverlay,DrawerCloseButton,DrawerContent,DrawerHeader, useDisclosure, } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import styles from '@styles/nav.module.css'
import { CiMenuBurger } from 'react-icons/ci'
import { IconContext } from 'react-icons/lib'

export const navItems = [
  {name: 'Home', href: '/' },
  {name: 'Contact', href: '/#contact'},
  {name: 'Gallery', href: '/gallery'},
  {name: 'Services', href: '/#services'}
]

export function NavigationMenu(){
  return(
  <nav style={{ width: '100%', backgroundColor: 'white'}}>
    <Container maxW={'700px'} py={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
      <div>
      <Link href='/'>
        <Image src='/Logo-Final.png' alt="Logo that takes you to the home page on click"
          priority
          width={150}
          height={150}
          style={{ height: '80px', width: 'auto'}}
        />
      </Link>
      </div>
      <div className={styles.navLinksContainer}>
        {navItems.map((item)=>(
          <Link style={{padding: '5px 15px', marginLeft: '10px', borderRadius: '10px' }} className={styles.navItems} key={item.name} href={item.href}>{item.name}</Link>
        ))}
      </div>
      <div className={styles.mobileNav}>
        <MobileNavigation/>
      </div>

    </Container>
  </nav>
  )
}

function MobileNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme='teal' onClick={onOpen} p={2} height={'50px'}>
        <IconContext.Provider value={{size:'40'}}>
          <CiMenuBurger/>
        </IconContext.Provider>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Container display={'flex'} flexDir={'column'} >

            {navItems.map((item)=>(
              <Button my={2} as={'a'} key={item.name} href={item.href}>{item.name}</Button>
            ))}
            </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}