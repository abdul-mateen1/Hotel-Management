import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Outlet } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import HomePage from '@/components/public/HomePage';
import Login from '@/components/public/Login';

import DashboardLayout from './layout/DashboardLayout';

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/staff/login" replace />;
};

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="/staff/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* <Route path="/" element={<HomePage />} /> */}
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

    </BrowserRouter>
  )
}