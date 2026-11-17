import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IconLogin,
  IconSun,
  IconExchange,
  IconHome,
  IconCurrencyDollar,
  IconTerminal2,
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";


export const slideData = [
    {
      title: "Single Room",
      // button: "Explore Component",
      src: "src\\assets\\singleBed.jpg",
    },
    {
      title: "Double Room",
      // button: "Explore Component",
      src: "src\\assets\\doubleBed.webp",
    },
    {
      title: "Executive Room",
      // button: "Explore Component",
      src: "src\\assets\\executiveRoom.jpg",
    },
    
  ];


export const NavLinks = [
    {
        title: "Home",
        icon: <IconHome />,
        type: "route",
        href: "/",
    },
    {
        title: "Products",
        icon: <IconTerminal2 />,
        type: "section",
        targetId: "products",
    },
    {
        title: "Pricing",
        icon: <IconCurrencyDollar />,
        type: "section",
        targetId: "pricing",
    },
    {
        title: "Theme",
        icon: <IconSun />,
        type: "action",
        action: "theme",
    },
    {
        title: "Login",
        icon: <IconLogin />,
        type: "route",
        href: "/staff/login",
    },
];
export const SidebarMenu = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];