import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Register } from './user';
import { Deposit } from './deposit';
import { CreateBidItem, ViewBidItems } from './bid-item';
import { Header, ProtectedComponent } from './common/components';
import { ViewBidItemsEnum } from './bid-item/view-bid-items';

const App = () => {
  return (
    <BrowserRouter>
      {/* <ProtectedComponent> */}
        <Header />
      {/* </ProtectedComponent> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedComponent>
              <ViewBidItems variant={ViewBidItemsEnum.ALL} />
            </ProtectedComponent>
          }
        />
        <Route
          path="/deposit"
          element={
            <ProtectedComponent>
              <Deposit />
            </ProtectedComponent>
          }
        />
        <Route
          path="/my-bid-items"
          element={
            <ProtectedComponent>
              <ViewBidItems variant={ViewBidItemsEnum.MANAGED} />
            </ProtectedComponent>
          }
        />
        <Route
          path="/create-bid-item"
          element={
            <ProtectedComponent>
              <CreateBidItem />
            </ProtectedComponent>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
