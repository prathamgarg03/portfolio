import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Layout from './Layout'
import Resume from './components/Resume/Resume'
import Projects from './components/Projects/Projects'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='resume' element={<Resume />} />
        <Route path='projects' element={<Projects />} />
      </Route>
    </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
