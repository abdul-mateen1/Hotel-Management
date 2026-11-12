import { Outlet } from 'react-router-dom';
import { GooeyInput } from '@/components/ui/gooey-input';
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';


export default function MainLayout() {

    return (
        <div className=" min-h-screen flex flex-col bg-gray-700">

            <header className="w-full">
                <div className="w-full container mx-auto flex flex-col md:flex-row items-center justify-between p-20 gap-4 bg-gray-900">
                    <LayoutTextFlip/>
                    <Navbar/>
                    <GooeyInput placeholder="Search..."  />
                </div>
            </header>

            <main className="flex-1 w-full container mx-auto ">
                <Outlet />
            </main>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    )
}