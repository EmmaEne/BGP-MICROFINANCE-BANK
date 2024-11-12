import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './Pages/HeroSection';

import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
      </Routes>
    </Router>
  )
}

export default App;
