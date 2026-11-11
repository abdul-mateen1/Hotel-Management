import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { SidebarMenu as links } from "@/services/helperService";
import { useNavigate } from 'react-router-dom';

export default function AppSidebar() {
    const [open, setOpen] = useState(false);
    // const navigate = useNavigate();

    return (
        <Sidebar open={open} setOpen={setOpen} animate={false}>
            <SidebarBody className="justify-between gap-10">
                <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto pt-4">
                    <div className="flex flex-col gap-2">
                        {links.map((link, idx) => (
                            <SidebarLink key={idx} link={link} />
                        ))}
                    </div>
                </div>
                <div>
                    <SidebarLink
                        link={{
                            label: "Profile",
                            href: "/profile",
                            icon: (
                                <img
                                    src="https://assets.aceternity.com/manu.png"
                                    className="h-7 w-7 shrink-0 rounded-full"
                                    alt="Avatar"
                                />
                            ),
                        }}
                    />
                </div>
            </SidebarBody>
        </Sidebar>
    );
};