import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import WithHeaderbar from '../components/templates/WithHeaderbar/WithHeaderbar';
import { Cand1, Cand2, Cand3, Cand4, Candidates } from './Candidates';
import Home from './Home';
import Info from './Info';

const Pages = () => (
  <BrowserRouter>
    <WithHeaderbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route exact path="candidates" element={<Candidates />} />          
          <Route path="candidates/cand1" element={<Cand1 />} />
          <Route path="candidates/cand2" element={<Cand2 />} />
          <Route path="candidates/cand3" element={<Cand3 />} />
          <Route path="candidates/cand4" element={<Cand4 />} />
      </Routes>
    </WithHeaderbar>
  </BrowserRouter>
);

export default Pages;
