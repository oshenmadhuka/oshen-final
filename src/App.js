// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Model from './Model';
import AccountLogin from './components/AccountLogin';


const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<AccountLogin/>} />
                    <Route path="/Model" element={<Model/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
