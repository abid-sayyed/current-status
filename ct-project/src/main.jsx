import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

import Home from './pages//Home.jsx'
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Search from "./pages/Search.jsx";
import Request from "./pages/Request.jsx";
import Map from "./pages/Map.jsx";
/*
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

*/

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
             <Route path='' element={<Home />} />
            <Route path='Login' element={<Login/>} />
            <Route path='Signup' element={<Signup/>} />
            <Route path='Search' element={<Search/>} />
            <Route path='Request' element={<Request/>} />
            <Route path='Map' element={<Map/>} />




            {/*  */}
          {/*<Route path='contact' element={<Contact />} />*/}
          {/*  <Route path='user/:userid' element={<User />} />*/}
          {/*  <Route*/}
          {/*      loader={githubInfoLoader}*/}
          {/*      path='github'*/}
          {/*      element={<Github />}*/}
          {/*  />*/}

        </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <RouterProvider router={router}/>
        </DevSupport>
    </React.StrictMode>,
)