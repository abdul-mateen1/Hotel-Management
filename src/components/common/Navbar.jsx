import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import { NavLinks } from '@/services/helperService';

export default function Navbar() {
    return (
        <>
            <FloatingDock items={NavLinks} />
        </>
    );
}