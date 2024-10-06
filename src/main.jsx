import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About.jsx'
import Project from './Components/Projects.jsx'
import Skills from './Components/Skills.jsx'
import Home from './Components/Home.jsx'

let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'project',
        element: <Project />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'about',
        element: <About />
      }
     
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
)
