import React from 'react'
import Navbar from './Navbar'
import HeaderBG from '../assets/Assignment-assets/Header-bg.svg/'
const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <img src={HeaderBG} alt="" />
    <main className="flex-grow p-4 md:ml-16">
      {children}
    </main>
  </div>
  )
}

export default Layout