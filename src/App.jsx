import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// page import start
import Home from './pages/Home.jsx';
import AllProduct from './pages/AllProduct.jsx';
import Fragrance from './pages/Fragrance.jsx';
import Delivery from './pages/Delivery.jsx';
import Brand from './pages/Brand.jsx';
import Event from './pages/Event.jsx';
import Campaign from './pages/Campaign.jsx';
import Notice from './pages/Notice.jsx';
import Qna from './pages/Qna.jsx';
import Faq from './pages/Faq.jsx';
import Membership from './pages/Membership.jsx';
// page import end

//styled component
import GlobalStyles from './styled/GlobalStyles.js';
import ContentTest from './pages/contentTest.jsx';


const App = () => {
  return (
    <HashRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/product" index element={<AllProduct />} />
        <Route path="/fragrance" index element={<Fragrance />} />
        <Route path="/delivery" index element={<Delivery />} />
        <Route path="/brand" index element={<Brand />} />
        <Route path="/event" index element={<Event />} />
        <Route path="/campaign" index element={<Campaign />} />
        <Route path="/notice" index element={<Notice />} />
        <Route path="/qna" index element={<Qna />} />
        <Route path="/faq" index element={<Faq />} />
        <Route path="/membership" index element={<Membership />} />
        <Route path="/t" index element={<ContentTest />} />
      </Routes>
      <Footer />
    </HashRouter>

  )

}
export default App;