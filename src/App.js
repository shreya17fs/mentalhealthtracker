import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageTracker from './pages/PageTracker';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<PageTracker />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;








