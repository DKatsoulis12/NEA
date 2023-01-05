import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Checkout from './Pages/Checkout';
import NoPage from './Pages/NoPage';
import Login from './Pages/Login';
import Thankyou from './Pages/Thankyou';
import Signup from './Pages/Signup';
import Signout from './Pages/Signout';

export default function App() {
  return (
    //The router is used to achieve a single-page application
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* All of the other pages are indented so that the header and footer from the layout page is always on the top and bottom respectively of every page */}
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


