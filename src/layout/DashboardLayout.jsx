import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AppSidebar from "@/components/common/AppSidebar";
import NavbarDemo from "@/components/private/NavbarDemo";
import {myAccess} from '../services/authService';
import { useAuth } from "@/context/AuthContext";

export default function DashboardLayout() {
    const { loading } = useAuth();

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center bg-neutral-900 text-white">
                Loading dashboard...
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-neutral-900">

            <AppSidebar />

            <div className="flex-1 flex flex-col overflow-hidden bg-neutral-600">
                <NavbarDemo />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-neutral-900 text-white">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}