import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import GlobalStyles from './styled/GlobalStyles.js';
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )

}
export default App;