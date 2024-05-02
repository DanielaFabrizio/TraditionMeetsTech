import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../homepage/Home.jsx';
import JobsList from '../homepage/JobsList.jsx';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<JobsList />} />
                <Route path="/h" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
