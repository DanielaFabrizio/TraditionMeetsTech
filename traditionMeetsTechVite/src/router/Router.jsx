import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/Home.jsx';
import JobsList from '../components/JobsList.jsx';
import Interviste from '../components/Interviste.jsx';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Interviste />} />
                <Route path="/h" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
