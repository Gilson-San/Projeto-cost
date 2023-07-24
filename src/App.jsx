import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Container from './components/layout/Container'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Casa from './components/pages/Casa'


function App() {
  

  return (
    
    <Router>
      
      <Container customClass="min-height">
      <Navbar/>
        <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/company' element={<Company />} />
        <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} />
          <Route exact path='/casa' element={<Casa />} />
          

        </Routes>
       
      </Container>
      
    <Footer/>
      </Router>
      
    
    
    
  )
}

export default App
