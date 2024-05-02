import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../homepage/Home.jsx';
import Interviste from '../interviste/Interviste.jsx'

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<Interviste />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
