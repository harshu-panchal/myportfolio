import Navbar from './components/Navbar'
import Home from './components/Home'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footerr from './components/Footerr'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './components/responsive.css'
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/portfolio/",
      element: <><Navbar />
        <Home />
        <Footerr /></>
    },
    {
      path: "/portfolio/Resume",
      element: <><Navbar /><Resume /><Footerr /></>
    },
    {
      path: "/portfolio/Projects",
      element: <><Navbar /><Projects /><Footerr /></>
    },
    {
      path: "/portfolio/Contact",
      element: <><Navbar /><Contact /><Footerr /></>
    }
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
