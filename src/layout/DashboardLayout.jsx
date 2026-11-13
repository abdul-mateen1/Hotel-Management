import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AppSidebar from "@/components/common/AppSidebar";
import NavbarDemo from "@/components/private/NavbarDemo";

export default function DashboardLayout() {
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