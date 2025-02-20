/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer"

function Layout() {
  return <>
    <Navbar />
    <div className=" mt-18 ">
    <Outlet />
    </div>
    <Footer/>
  </>
}

export default Layout