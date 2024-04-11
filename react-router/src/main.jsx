import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { gitHubLoader } from './components/Github/Github.jsx'
//Alternative way to create routes
/* const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
         path:"",
         element:<Home/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      }
    ]
  }
]) */

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="user/:userid" element={<User/>}/>
    <Route 
    loader={gitHubLoader}
    path="github" element={<Github/>}/>
  </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
