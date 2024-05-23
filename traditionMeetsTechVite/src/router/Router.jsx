import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/Home.jsx';
import JobsList from '../components/JobsList.jsx';
import Home from '../components/Home.jsx';
import Pellettiere from '../components/Pellettiere.jsx';
import Panettiere from '../components/Panettiere.jsx';
import Falegname from '../components/Falegname.jsx';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/h" element={<HomePage />} />
                <Route path="/jobs-list" element={<JobsList/>} />
                <Route path="/Falegname" element={<Falegname/>} />
                <Route path="/Pellettiere" element={<Pellettiere/>} />
                <Route path="/Panettiere" element={<Panettiere/>} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
