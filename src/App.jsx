import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Outlet } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import HomePage from '@/components/public/HomePage';
import Login from '@/components/public/Login';  
import MultiForm from "@/components/public/MultiForm";

import DashboardLayout from './layout/DashboardLayout';
import MainPage from "@/components/private/MainPage";
import EmployeeForm from "@/components/private/EmployeeForm";
import { AuthProvider } from './context/AuthContext';
import CustomerDashboardCards from './components/private/CustomerDashboardCards';


const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/staff/login" replace />;
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>

          <Route path="/staff/login" element={<Login />} />
          <Route path="/form" element={<MultiForm />} />

          <Route element={<ProtectedRoute />}>

            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<CustomerDashboardCards />} />
            </Route>

            <Route path="/employee-form" element={<EmployeeForm />} />

          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  )
}