import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Register } from './user';
import { Deposit } from './deposit';
import { CreateBidItem, ViewBidItems } from './bid-item';
import { Header } from './common/components';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ViewBidItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/create-bid-item" element={<CreateBidItem />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
