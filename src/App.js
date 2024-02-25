import Navbar from './pages/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Route, Routes } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Navbar2 from './sections/Navbar2';

export default function App() {
  return ( 
      <>
      <Navbar></Navbar>
      
      <div className='container'>
        <Routes>
          <Route path="/Home"element={<Home/>} />
          <Route path="/About"element={<About/>} />
          <Route path="/Contact"element={<Contact/>} />
          <Route path="/Projects"element={<Projects/>} />
        </Routes>
      </div>

      
      <body>
        <Grid container>
          <Grid item xs ={12} md={10}>
            <Paper>1</Paper>
          </Grid>
        </Grid>
        <p>hi my name is alan</p>

        <Navbar2></Navbar2>
      </body>
      </>
  )
}
    
  


