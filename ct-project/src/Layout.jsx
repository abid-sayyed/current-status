import React from 'react'
import Nav from './components//Nav.jsx'
import Footer from './components//Footer'

import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Nav/>
           <div className="mx-auto w-full max-w-7xl">
               <Outlet />
           </div>

            <Footer />
        </>
    )
}

export default Layout