import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import WithHeaderbar from '../components/templates/WithHeaderbar/WithHeaderbar';
import App from '../App';

const Pages = () => (
  <BrowserRouter>
    <WithHeaderbar>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </WithHeaderbar>
  </BrowserRouter>
);

export default Pages;
