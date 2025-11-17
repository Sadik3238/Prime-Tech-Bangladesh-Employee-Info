import React from 'react';
import cover from "../../assets/Images/cover.jpg"
import CoverContent from './CoverContent';

const Cover = ({ isMenuOpen, toggleMenu, menuItems }) => {
    return (
        <div className='relative w-full h-screen'>
            <img className='w-full h-screen object-cover' src={cover} alt="CoverImage" />
            <CoverContent />

            {/* Full-Screen Overlay/Backdrop (Optional: for a better user experience) */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-900"
                    onClick={toggleMenu} // Close sidebar when clicking outside
                ></div>
            )}

            {/* Sidebar Component */}
            <div
                // Fixed position, full height, right side. Uses transform for sliding animation
                className={`
                    fixed top-4 right-4 h-full w-80 md:w-80 bg-orange-600 p-6 z-50
                    transform origin-top-right transition-[transform,opacity] duration-900 ease-in-out
                    ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                `}
            >
                {/* Close Button */}
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 bg-black text-white px-3 py-1 font-bold text-sm
                     btn transform transition-transform duration-700 hover:scale-95  rounded-full w-24 h-10 flex items-center justify-center"
                >
                    CLOSE
                </button>

                {/* Menu Items */}
                <ul className="mt-12 space-y-1 text-white text-3xl font-semibold">
                    {menuItems.map((item, index) => (
                        <li
                            key={item}
                            className={`relative flex items-center transition-all duration-500 ease-out hover:scale-95 hover:ml-5 group group-hover:-translate-x-8 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
                            style={{ transitionDelay: isMenuOpen ? `${index * 70}ms` : '0ms' }}
                        >
                            <button className="p-2 text-white group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className='w-6 h-6 transition-transform duration-500 opacity-0 group-hover:opacity-100' >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                            <a href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-gray-200 transition-colors block flex-grow pr-1">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Social Links */}
                <div className="absolute bottom-6 left-6 text-white text-base">
                    <p className='mt-8'>Facebook</p>
                    <p>LinkedIn</p>
                    <p>Instagram</p>
                    <p>Youtube</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;

