import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-8 w-full bg-slate-900 text-slate-200 ">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pb-12">
                    <div>
                        <h6 className="font-semibold text-white">CS — Ticket System</h6>
                        <p className="text-sm mt-2 text-slate-400 pr-10">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div>
                        <h6 className="font-semibold text-white">Company</h6>
                        <ul className="text-sm mt-2 space-y-2 text-slate-400">
                            <li>About Us</li>
                            <li>Our Mission</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-semibold text-white">Services</h6>
                        <ul className="text-sm mt-2 space-y-2 text-slate-400">
                            <li>Products & Services</li>
                            <li>Customer Stories</li>
                            <li>Download Apps</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-semibold text-white">Information</h6>
                        <ul className="text-sm mt-2 space-y-2 text-slate-400">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-semibold text-white">Social Links</h6>
                        <ul className="text-sm mt-2 space-y-2 text-slate-400">
                            <li>@CS — Ticket System</li>
                            <li>@CS — Ticket System</li>
                            <li>@CS — Ticket System</li>
                            <li>support@cst.com</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6 border-t border-slate-800 pt-6 text-center text-slate-400 text-sm">© 2025 CS — Ticket System. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;