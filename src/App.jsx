import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './Pages/HeroSection';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import BusinessManagement from './Pages/BusinessManagement';
import Banking from './Pages/Banking';
import LoanApplication from './Pages/LoanApplication';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/banking' element={<Banking />} />
        <Route path='/appy-loan' element={<LoanApplication />} />
        <Route path='/BusinessManagement' element={<BusinessManagement />} />
        <Route path='/apply' element={<LoanApplication/>} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </Router>
  )
}

export default App;
