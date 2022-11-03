import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import Layout from './Pages/Layout';
import Home from './Pages/Home';

export default function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* All of the other pages are indented so that the header and footer from the layout page is always on the top and bottom respectively of every page */}
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


