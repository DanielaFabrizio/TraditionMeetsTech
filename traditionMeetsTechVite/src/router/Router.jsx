import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/Home.jsx';
import JobsList from '../components/JobsList.jsx';
import Interviste from '../components/Interviste.jsx';
import Home from '../components/Home.jsx';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/h" element={<HomePage />} />
                <Route path="/jobs-list" element={<JobsList/>} />
                <Route path="/interviste" element={<Interviste/>} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
