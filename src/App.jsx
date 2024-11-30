import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './Pages/HeroSection';
import About from './Pages/about';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';

import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </Router>
  )
}

export default App;
