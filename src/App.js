import Navbar from './pages/Navbar';
import Resume from './pages/Resume';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Route, Routes } from "react-router-dom"
import StarField from './StarField';


export default function App() {
  return ( 
      <>
      <Navbar></Navbar>

      <StarField numberOfStars={300}></StarField>
      <div className='container'>
        <Routes>
          <Route path=""element={<Home/>} />
          <Route path="/Home"element={<Home/>} />
          <Route path="/Resume"element={<Resume/>} />
          <Route path="/Contact"element={<Contact/>} />
          <Route path="/Projects"element={<Projects/>} />
        </Routes>
      </div>

      
      <body>
        
      </body>
      </>
  )
}
    
  


