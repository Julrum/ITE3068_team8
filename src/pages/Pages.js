import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import WithHeaderbar from '../components/templates/WithHeaderbar/WithHeaderbar';
import { Candidate, Candidates } from './Candidates';
import Home from './Home';
import Info from './Info';
import Poll from './Poll';
import News from './News';

const Pages = () => (
  <BrowserRouter>
    <WithHeaderbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route path="/news" element={<News />} />
        <Route exact path="candidates" element={<Candidates />} />
          <Route path="candidates/cand1" element={<Candidate num={1} />} />
          <Route path="candidates/cand2" element={<Candidate num={2} />} />
          <Route path="candidates/cand3" element={<Candidate num={3} />} />
          <Route path="candidates/cand4" element={<Candidate num={4} />} />
        <Route path="/poll" element={<Poll />} />
      </Routes>
    </WithHeaderbar>
  </BrowserRouter>
);

export default Pages;
