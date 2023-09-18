import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/product.jsx';
import Footer from './components/Footer.jsx';
import GlobalStyles from './styled/GlobalStyles.js';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/product" index element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )

}
export default App;