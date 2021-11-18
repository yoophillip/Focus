import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.scss';
import Timer from "./Timer.jsx";
import Login from './Login.jsx';
import Register from './Register.jsx';

function App() {
    return (
        <div>
            <div id="header">
                <Router>
                    <Routes>
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/" element={<Login />} />
                        <Route exact path="/timer" element={<Timer />}></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;