import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import WithHeaderbar from '../components/templates/WithHeaderbar/WithHeaderbar';
import Home from './Home';
import Info from './Info';

const Pages = () => (
  <BrowserRouter>
    <WithHeaderbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </WithHeaderbar>
  </BrowserRouter>
);

export default Pages;
