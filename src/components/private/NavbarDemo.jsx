export default function NavbarDemo() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    
                    <span className="ml-3 text-xl font-mono text-white">HOTEL THE GRAN`</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-gray-100 justify-center">
                    <a className="mr-5 hover:text-orange-500 cursor-pointer">Home</a>
                    <a className="mr-5 hover:text-orange-500 cursor-pointer">My Bookings</a>
                    <a className="mr-5 hover:text-orange-500 cursor-pointer">Services</a>
                    {/* <a className="mr-5 hover:text-orange-400 cursor-pointer"></a> */}
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-orange-500 cursor-pointer rounded text-base mt-4 md:mt-0">Logout
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}