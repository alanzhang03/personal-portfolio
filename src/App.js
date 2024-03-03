import Navbar from './pages/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Route, Routes } from "react-router-dom"
import StarField from './StarField';

export default function App() {
  return ( 
      <>
      <div className='background'></div>
      <StarField></StarField>
      <Navbar></Navbar>
      <div className='container'>
        <Routes>
          <Route path=""element={<Home/>} />
          <Route path="/Home"element={<Home/>} />
          <Route path="/About"element={<About/>} />
          <Route path="/Contact"element={<Contact/>} />
          <Route path="/Projects"element={<Projects/>} />
        </Routes>
      </div>

      
      <body>
        
      </body>
      </>
  )
}
    
  


