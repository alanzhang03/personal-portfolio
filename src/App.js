import Navbar from './pages/Navbar';
import Resume from './pages/Resume';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Route, Routes } from "react-router-dom"
import StarField from './pages/StarField';
import Footer from './pages/Footer';
import AboutMePage from './pages/AboutMePage';



export default function App() {
  return ( 
      <>
      <Navbar />
      <StarField numberOfStars={100}></StarField>
      <div className='container'>


          <Routes>
            <Route path=""element={<Home/>} />
            <Route path="/Home"element={<Home/>} />
            <Route path="/Resume"element={<Resume/>} />
            <Route path="/Contact"element={<Contact/>} />
            <Route path="/Projects"element={<Projects/>} />
            <Route path="/AboutMePage"element={<AboutMePage/>} />
            
          </Routes>
        
      </div>
      <Footer />
      </>
  )
}
    
  


