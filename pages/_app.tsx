import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnnouncementBar from '../components/AnnouncementBar'
import Link from 'next/link'

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
