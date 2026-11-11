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
      src: "https://hotels.his-j.com/image/hotel/MUC/MUC00469-03.jpg?utm_source=chatgpt.com",
    },
    {
      title: "Double Room",
      // button: "Explore Component",
      src: "https://www.hotelperk.cz/r/102/76694/obsah/pokoje/perk-superior-plus/superior_1.jpg?utm_source=chatgpt.com",
    },
    {
      title: "Executive Room",
      // button: "Explore Component",
      src: "https://secure.s.forbestravelguide.com/img/properties/the-ritz-carlton-tokyo/extra-large/0Property-TheRitzCarltonTokyo-Hotel-GuestroomSuite-ExecutiveSuite-TheRitzCarltonHotelCompanyLLC.jpg?utm_source=chatgpt.com",
    },
    
  ];


export const NavLinks = [
    {
        title: "Home",
        icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/",
    },

    {
        title: "Products",
        icon: (
            <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "",
    },
    {
        title: "Pricing",
        icon: (
            <IconCurrencyDollar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/pricing",
    },
    // {
    //     title: "Changelog",
    //     icon: (
    //         <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //     ),
    //     href: "#",
    // },

    {
        title: "Theme",
        icon: (
            <IconSun className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Login",
        icon: (
            <IconLogin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
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