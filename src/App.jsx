import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import AllProduct from './pages/AllProduct.jsx';
import Fragrance from './pages/Fragrance.jsx';
import Footer from './components/Footer.jsx';
import GlobalStyles from './styled/GlobalStyles.js';
const App = () => {
  return (
    <HashRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/product" index element={<AllProduct />} />
        <Route path="/fragrance" index element={<Fragrance />} />
      </Routes>
      <Footer />
    </HashRouter>

  )

}
export default App;