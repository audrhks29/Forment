import React, { useEffect } from 'react';
import { BrowserRouter, HashRouter, Route, Routes, useLocation } from 'react-router-dom';

// layout
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

// page import 
import Home from './pages/Home.jsx';
import AllProduct from './pages/AllProduct.jsx';
import Fragrance from './pages/Fragrance.jsx';
import Delivery from './pages/Delivery.jsx';
import Brand from './pages/Brand.jsx';
import Event from './pages/Event.jsx';
import Campaign from './pages/Campaign.jsx';
import Notice from './pages/Notice.jsx';
import Faq from './pages/Faq.jsx';
import Membership from './pages/Membership.jsx';
import Login from './pages/Login.jsx';
import Join from './pages/Join.jsx';
import NoneMemberOrder from './pages/NoneMemberOrder.jsx';
import Basket from './pages/Basket.jsx';
import MyPage from './pages/MyPage.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import NoticeDetail from './pages/NoticeDetail.jsx';
import FaqDetail from './pages/FaqDetail.jsx';

//styled component
import GlobalStyles from './styled/GlobalStyles.js';

// store
import useUserStore from './store/user-store.js';

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

const App = () => {
  const { loginState } = useUserStore(state => state);
  const { initializeLoginState } = useUserStore();

  useEffect(() => {
    initializeLoginState();
  }, []);

  return (
    <HashRouter>
      <GlobalStyles />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/product" element={<AllProduct />} />
        <Route path="/product/:productID" element={<ProductDetail />} />
        <Route path="/fragrance" element={<Fragrance />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/event" element={<Event />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/:noticeID" element={<NoticeDetail />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq/:faqID" element={<FaqDetail />} />
        <Route path="/membership" element={<Membership />} />
        {
          !loginState && <Route path="/login" element={<Login />} />
        }
        <Route path="/join" element={<Join />} />
        <Route path="/nonememberorder" element={<NoneMemberOrder />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/mypage" element={<MyPage />} />
        {/* <Route path="/t" index element={<ContentTest />} /> */}
      </Routes>
      <Footer />
    </HashRouter>

  )

}
export default App;