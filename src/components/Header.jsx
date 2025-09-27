import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const Header = () => {
    return (
        <div>
            <header className="border-b border-slate-200">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4">
                            <div className="text-2xl text-black font-bold">CS — Ticket System</div>
                        </div>
                        <nav className="hidden md:flex items-center text-gray-800 gap-6 text-sm">
                            <a href="#" className="hover:text-violet-600 font-semibold">Home</a>
                            <a href="#" className="hover:text-violet-600 font-semibold">FAQ</a>
                            <a href="#" className="hover:text-violet-600 font-semibold">Changelog</a>
                            <a href="#" className="hover:text-violet-600 font-semibold">Blog</a>
                            <a href="#" className="hover:text-violet-600 font-semibold">Download</a>
                            <a href="#" className="hover:text-violet-600 font-semibold">Contact</a>
                            <button className="flex gap-2 items-center ml-4 px-3 py-2 cursor-pointer rounded-md bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white text-[16px] shadow"><FaPlus className='text-sm'/> New Ticket</button>
                        </nav>
                        <div className="md:hidden">
                            <button aria-label="menu" className="p-2 rounded-md border"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg></button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;