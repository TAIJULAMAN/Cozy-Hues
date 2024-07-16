import React from 'react'
import Navbar from '../../Components/Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Shared/Footer/Footer'

function Main() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Main