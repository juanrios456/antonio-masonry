import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { NavigationMenu } from '@components/NavigationMenu'
import { Footer } from '@components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:'Image Gallery',
  description: 'Image gallery for Antonio masonry and stucco showcasing the many jobs that have been completed.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundColor: '#F5F5F5', overflowX: 'hidden'}}>
        <Providers>
          <NavigationMenu/>
            <main>
              {children}
            </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
