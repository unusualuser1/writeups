import './globals.css'
import { Comfortaa, Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import DynamicNavBar from '@/components/NavBarLoader'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const inter = Comfortaa({ subsets: ['latin'] })






export const metadata = {
  title: 'Writeups',
  description: 'Generated by create next app',
}

export default function RootLayout({children}:{children: React.ReactNode},pageTitle:string, description:string ) {
  return (
    <html lang="en" className='h-screen'>     {/*previous h-full*/} 
      
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-J8K4J5078W`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J8K4J5078W');
          `}
        </Script>
        <title>{pageTitle}</title>
        {description}
        <meta name='keywords' content='writeups, 0xwriteups, htb, hackthebox, hack the box, hack the box writeups, writeups hack the box, writeups htb' />
        

      <body className="h-screen"> {/*previous h-full*/}
        
        <header className='md:w-full md:flex md:justify-center'>
          <DynamicNavBar/>
        </header>

        <main className='xsm:pt-[100px] md:pt-0 min-h-screen'> {/* pt-[100px] previous min-h-full*/}
          {children}
        </main>

        <footer>
          <Footer/>
        </footer>

      </body>
    </html>
  )
}
