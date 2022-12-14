import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import NoPage from './Pages/NoPage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Signout from './Pages/Signout';

export default function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* All of the other pages are indented so that the header and footer from the layout page is always on the top and bottom respectively of every page */}
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


