// Basic Imports
import React from 'react'
import Link from 'next/link'
import type { AppProps } from 'next/app'

// Components Imports
import Navbar from '@/common/components/Navbar'
import Footer from '@/common/components/Footer'
import AnnouncementBar from '@/common/components/AnnouncementBar'

// Styles Imports
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <AnnouncementBar>
        <div className="announcement-content">
          <span className="text-xs flex flex-row items-center justify-start gap-1">
            {"We're coming up with a series of sessions on Design Engineering"}
            <span>Checkout the session <Link href="https://www.youtube.com/@hekorscommunity/" target="_blank" className="underline">playlist here</Link></span>
          </span>
        </div>
      </AnnouncementBar>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}
