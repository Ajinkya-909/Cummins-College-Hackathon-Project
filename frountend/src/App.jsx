import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Navbar from './components/Navbar';
import EcScore from './pages/EcoScore.jsx'
import Calc from './pages/Calc';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/calc" element={<Calc />} />
          <Route path="/" element={<Home />} />
          <Route path="/ecoscore" element={<EcScore />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
