import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import '@fontsource/anton/400.css'
import '@fontsource/inter-tight/400.css'
import '@fontsource/inter-tight/500.css'
import '@fontsource/inter-tight/600.css'
import '@fontsource/instrument-serif/400-italic.css'
import './index.css'
import App from './App'

// Old routes still resolve; they open the single page at the matching section.
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/projects', element: <App section="#work" title="Projects" /> },
  { path: '/resume', element: <App section="#history" title="Story" /> },
  { path: '*', element: <App /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
