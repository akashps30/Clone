import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './pages/Home';
import Notices from './pages/Notices';
import Results from './pages/Results';
import LoginRegister from './pages/LoginRegister';

// Import your common components (like Header and Footer)
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      {/* Include the Header that appears on all pages */}
      <Header />

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/results" element={<Results />} />
        <Route path="/login-register" element={<LoginRegister />} />
      </Routes>

      {/* Include the Footer that appears on all pages */}
      <Footer />
    </Router>
  );
};

export default App;
