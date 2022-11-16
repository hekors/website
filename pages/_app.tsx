import '../styles/index.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <div className="navbar-container page-view">
        <Navbar />
      </div>
      <Component {...pageProps} />
    </React.Fragment>
  )
}
