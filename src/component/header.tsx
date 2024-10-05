import React, { useState, useEffect } from 'react';
import Logo from '../../../asset/images/BIS.png';
import { MagnifyingGlassIcon, BellIcon, UserIcon, ShoppingCartIcon, Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Disclosure, Button } from '@headlessui/react';
import SearchBarHomeUser from './searchBar';
import { Link } from 'react-router-dom';

const HeaderHomeUser = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isBellDrawerOpen, setIsBellDrawerOpen] = useState(false); 

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 767);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const toggleBellDrawer = () => {
        setIsBellDrawerOpen(!isBellDrawerOpen);
    };

    const iconSize = isMobile ? 'w-5 h-5' : 'w-6 h-6';

    return (
        <Disclosure as="nav">
            <div className="w-full mr-6 ml-6 z-0 bg-white shadow-lg p-6">
                <div className="flex justify-between px-2 py-2">
                    <h3 className='text-3xl'>Welcome, Taila</h3>

                    <div className='flex-grow flex items-center justify-center mx-4'>
                        <SearchBarHomeUser />
                    </div>

                    <div className='flex items-center space-x-6'> {/* Increased space between icons */}
                        {isMobile && (
                            <Button>
                                <Bars4Icon className={`${iconSize} text-big-text-color`} />
                            </Button>
                        )}

                        <Button className='ml-2' onClick={toggleBellDrawer}>
                            <BellIcon className={`${iconSize} text-big-text-color`} />
                        </Button>
                        
                        <button onClick={toggleDrawer}>
                            <ShoppingCartIcon className={`${iconSize} text-big-text-color`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Shopping Cart Drawer */}
            {isDrawerOpen && (
                <div className="fixed inset-0 flex z-50 justify-end">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={toggleDrawer}></div>
                    <div className={`bg-white shadow-lg transition-transform transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} w-[500px] h-full`}>
                        <div className="h-full p-8">
                            <div className='flex justify-between mt-10'>
                                <h2 className="text-3xl text-big-text-color font-bold">Shopping Cart</h2>
                                <Link to='/' onClick={toggleDrawer}>
                                    <XMarkIcon className='w-6 h-6 m-1 cursor-pointer text-red' />
                                </Link>
                            </div>
                            <hr className="px-8 mt-5" />
                            
                            <div className='flex justify-between mt-5'>
                                <h3 className='text-lg text-big-text-color font-bold'>SubTotal:</h3>
                                <h3 className='text-lg text-big-text-color'>124$</h3>
                            </div>
                            <div className="grid place-items-center mt-4">
                                <button
                                    onClick={toggleDrawer}
                                    className="bg-primary-color text-white px-6 py-2 rounded text-lg w-full"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bell Drawer */}
            {isBellDrawerOpen && (
                <div className="fixed inset-0 flex z-50 justify-end">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={toggleBellDrawer}></div>
                    <div className={`bg-white shadow-lg transition-transform transform ${isBellDrawerOpen ? 'translate-x-0' : 'translate-x-full'} w-[500px] h-full`}>
                        <div className="h-full p-8">
                            <div className='flex justify-between mt-10'>
                                <h2 className="text-3xl text-big-text-color font-bold">Notifications</h2>
                                <Link to='/' onClick={toggleBellDrawer}>
                                    <XMarkIcon className='w-6 h-6 m-1 cursor-pointer text-red' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Disclosure>
    );
};

export default HeaderHomeUser;
