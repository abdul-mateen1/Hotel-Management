"use client";
import React, { useState, useEffect } from "react";
import { 
  LayoutDashboard, 
  User, 
  Settings, 
  LogOut, 
  ChevronRight 
} from "lucide-react";

const getIconComponent = (iconName) => {
  switch (iconName?.toLowerCase()) {
    case "dashboard": return <LayoutDashboard className="w-5 h-5" />;
    case "profile": return <User className="w-5 h-5" />;
    case "settings": return <Settings className="w-5 h-5" />;
    case "logout": return <LogOut className="w-5 h-5" />;
    default: return <ChevronRight className="w-5 h-5" />;
  }
};

export function AppSidebar() {
  const [sidebarItems, setSidebarItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Map/Fetch sidebar options from an API call on mount
  useEffect(() => {
    async function fetchSidebarOptions() {
      try {
        // Replace this URL with your actual backend or API route
        // const response = await fetch('/api/sidebar-options');
        // const data = await response.json();
        
        // Mocking the API response matching your screenshot layout
        setTimeout(() => {
          const apiResponse = [
            { id: 1, name: "Dashboard", link: "/dashboard", icon: "dashboard" },
            { id: 2, name: "Profile", link: "/profile", icon: "profile" },
            { id: 3, name: "Settings", link: "/settings", icon: "settings" },
            { id: 4, name: "Logout", link: "/logout", icon: "logout" },
          ];
          setSidebarItems(apiResponse);
          setLoading(false);
        }, 300);
      } catch (error) {
        console.error("Failed to fetch sidebar options", error);
        setLoading(false);
      }
    }

    fetchSidebarOptions();
  }, []);

  return (
    <aside className="w-60 h-screen bg-[#1c1c1c] text-neutral-200 flex flex-col justify-between p-3 border-r border-[#2c2c2c] select-none">
      
      {/* Top Navigation Links Mapped from API */}
      <div className="space-y-1.5 mt-2">
        {loading ? (
          <div className="px-3 py-2 text-xs text-neutral-500 animate-pulse">
            Loading menu...
          </div>
        ) : (
          sidebarItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-300 hover:bg-orange-500 hover:text-white transition-colors"
            >
              <span className="text-neutral-400">{getIconComponent(item.icon)}</span>
              <span>{item.name}</span>
            </a>
          ))
        )}
      </div>

      {/* Bottom Profile Card */}
      <div className="mb-2">
        <div className="border border-[#333333] rounded-xl p-2.5 bg-[#181818] flex items-center gap-3 shadow-sm hover:bg-orange-500 transition-all cursor-pointer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0dW491TS8p25zqH1JdG1fj-NRldx_t-MfzWk68jQEBw&s=10"
            alt="User Avatar"
            className="w-9 h-9 rounded-full object-cover border border-neutral-700"
          />
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-medium text-white truncate">Profile</span>
            <span className="text-xs text-neutral-400 truncate">View settings</span>
          </div>
        </div>
      </div>
      
    </aside>
  );
}

export default AppSidebar;