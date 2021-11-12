import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from '../App';

const Pages = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

export default Pages;
