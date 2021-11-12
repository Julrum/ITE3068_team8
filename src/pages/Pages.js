import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import WithHeaderbar from '../components/templates/WithHeaderbar/WithHeaderbar';
import Home from './Home/';

const Pages = () => (
  <BrowserRouter>
    <WithHeaderbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </WithHeaderbar>
  </BrowserRouter>
);

export default Pages;
