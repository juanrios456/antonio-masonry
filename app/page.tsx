import Image from 'next/image'
import { Hero } from './hero'
import { Services } from './services'
import { ContactForm } from '@components/ContactForm'
import type { Metadata } from 'next'
  
export const metadata: Metadata = {
  title: 'Home, Contact',
  description: 'Construction contractor that does masonry work including stone, stucco, brick, and block work. With over 15 years of experience we have worked with big and small projects. We do work with commercial projects, and residential projects. ',
  openGraph:{
    title: 'Antonio Masonry and Stucco',
    description: 'Topeka local masonry contractor',
    url: 'https://www.antoniomasonryandstucco.com/',
    siteName: 'Antonio Masonry and Stucco',
    images:[
    {
      url: 'https://www.antoniomasonryandstucco.com/Logo-Final.png',
      width: 640,
      height: 500,
      alt: 'Logo of Antonios Masonry and Stucco',
    },
    ]
  }
}

export default function Home() {
  return (
    <>
      <Hero/>
      <Services/>
      <ContactForm/>
    </>
  )
}
