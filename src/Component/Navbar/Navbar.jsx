import React from 'react';
import { ShoppingCart } from 'lucide-react';
import logo from "../../assets/Images/logo 2.png";


const Navbar = ({ toggleMenu, isMenuOpen, menuItems }) => {
    return (
        <div className='mx-auto absolute w-full z-10 p-2'>
            {/* Main Navbar Content */}
            <nav className='mt-4 flex justify-between'>
                <div>
                    <img src={logo} alt="Prime tech bangladesh"
                        className='w-12 h-12 object-contain' />
                </div>

                {/* icon main div */}
                <div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal gap-4 items-center">
                            {isMenuOpen && menuItems.map((item, index) => (
                                <li key={index}>
                                    <a className='p-2 text-white hover:text-orange-500'>{item}</a>
                                </li>
                            ))}
                            <li className={`bg-amber-100 border hover:rounded-sm ${isMenuOpen ? '' : ''}`}>
                                <a className='p-2'>
                                    <ShoppingCart className='w-5 h-5' />
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={toggleMenu}
                                    className='bg-orange-500 text-white btn
                                        transform transition-transform duration-900 hover:scale-105 px-4 py-2 rounded-full w-24 h-10 flex items-center justify-center'
                                >
                                    MENU
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;



