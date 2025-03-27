import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="bg-gradient-to-r from-gray-10 to-gray-200 text-gray-900 h-16">
                <nav
                    aria-label="Global"
                    className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
                >
                    <div className="flex lg:flex-1 items-center space-x-3">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt="Logo"
                                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=white&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <span className="text-lg font-semibold text-gray-900">DF Detect</span>
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <div className="flex gap-x-12">
                            <Link className="text-sm font-semibold hover:text-black-800 transition" to="/Home">
                                Home
                            </Link>
                            <Link className="text-sm font-semibold hover:text-black-800 transition" to="/Results">
                                Results
                            </Link>
                            <Link className="text-sm font-semibold hover:text-black-800 transition" to="/AboutModel">
                                About Tool
                            </Link>
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-gray-900">
                            <Bars3Icon className="h-6 w-6" />
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Panel with AnimatePresence */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <Dialog as="div" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden fixed inset-0 z-50">
                            {/* Overlay */}
                            <motion.div
                                className="fixed inset-0 bg-black bg-opacity-50"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setMobileMenuOpen(false)}
                            />

                            {/* Sidebar Menu */}
                            <motion.div
                                className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-4"
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold text-gray-900">DF Detect</span>
                                    <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-900">
                                        <XMarkIcon className="h-6 w-6" />
                                    </button>
                                </div>
                                <div className="mt-4 space-y-4">
                                    <Link className="block text-sm font-semibold text-gray-900 hover:bg-gray-200 p-2 rounded" onClick={() => setMobileMenuOpen(false)} to="/Home">
                                        Home
                                    </Link>
                                    <Link className="block text-sm font-semibold text-gray-900 hover:bg-gray-200 p-2 rounded" onClick={() => setMobileMenuOpen(false)} to="/Results">
                                        Results
                                    </Link>
                                    <Link className="block text-sm font-semibold text-gray-900 hover:bg-gray-200 p-2 rounded" onClick={() => setMobileMenuOpen(false)} to="/AboutModel">
                                        About Tool
                                    </Link>
                                </div>
                            </motion.div>
                        </Dialog>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Header;
