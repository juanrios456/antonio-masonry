import Image from 'next/image'
import { Hero } from './hero'
import { Services } from './services'
import { ContactForm } from '@components/ContactForm'


export default function Home() {
  return (
    <>
      <Hero/>
      <Services/>
      <ContactForm/>
    </>
  )
}