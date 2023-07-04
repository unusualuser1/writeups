import './globals.css'
import { Comfortaa, Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { MenuAnimation } from '@/components/MenuAnimation'

const inter = Comfortaa({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <MenuAnimation>
          <NavBar/>
        </MenuAnimation>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
