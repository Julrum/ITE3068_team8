import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Cand1 from "./Candidate/Cand1";

const Candidates = () => {

    // <BrowserRouter>
    //     <Route exact path="/candidates">
    //         <Route path="cand1" element={<Cand1 />} />
    //     </Route>
    // </BrowserRouter>

    return <div>
        Candidates
        <Link to="/candidates/cand1">기호 1번</Link>
        <Link to="/candidates/cand2">기호 2번</Link>
        <Link to="/candidates/cand3">기호 3번</Link>
        <Link to="/candidates/cand4">기호 4번</Link>
    </div>;
}

export default Candidates;