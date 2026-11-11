import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AppSidebar from "@/components/common/AppSidebar";

export default function DashboardLayout() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-gray-100 dark:bg-neutral-900">
            <AppSidebar />
            <main className="flex flex-1 overflow-x-hidden overflow-y-auto bg-white dark:bg-neutral-900">
                <Outlet />
            </main>
        </div>
    );
}