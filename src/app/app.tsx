import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Register } from './user';
import { Deposit } from './deposit';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/deposit" element={<Deposit />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
