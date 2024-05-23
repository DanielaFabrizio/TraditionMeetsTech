import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/Home.jsx';
import JobsList from '../components/JobsList.jsx';
import Home from '../components/Home.jsx';
import Pellettiere from '../components/Pellettiere.jsx';
import Panettiere from '../components/Panettiere.jsx';
import Falegname from '../components/Falegname.jsx';
import Calzolaio from '../components/Calzolaio.jsx';
import Agricoltore from '../components/Agricoltore.jsx';
import Costruttore from '../components/Costruttore.jsx';
import Relazione from '../components/Relazione.jsx';

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
                <Route path="/Calzolaio" element={<Calzolaio/>} />
                <Route path="/Agricoltore" element={<Agricoltore/>} />
                <Route path="/Costruttore" element={<Costruttore/>} />
                <Route path="/Relazione" element={<Relazione/>} />

            </Routes>
        </Router>
    );
}

export default AppRouter;
