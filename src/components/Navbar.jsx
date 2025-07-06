import React, { useState, useEffect } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { useTheme } from '../context/ThemeContext'; // Import the theme context
import { CiLight } from "react-icons/ci";    
import { MdOutlineDarkMode } from "react-icons/md";
import { NavLink, useLocation } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";

function Navbar() {
    const [nav, setNav] = useState(false);
    const { theme, toggleTheme } = useTheme(); // Use theme and toggle function
    const location = useLocation();

    const handleNav = () => {
        setNav(!nav);
    };

    // Close navbar when route changes
    useEffect(() => {
        setNav(false);
    }, [location]);

    return (    
        <div className={`flex justify-between h-24 max-w-[800px]  mt-3 mx-auto items-center px-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <div>
                <h1 className={`py-0.5 w-max text-[17px] tracking-tighter font-bold font-sangeist ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                    Meeth Patel
                </h1>
                <div className='flex items-center w-[132px] h-[10px] space-x-2 tracking-tighter'>
                    <FaTwitter />
                    <a
                        href='https://x.com/meeth27'
                        target='_blank'
                        rel="noopener noreferrer"
                        className={`${theme === 'dark' ? 'text-gray-400 hover:text-white font-mono' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        meeth27
                    </a>
                </div>
            </div>

            <ul className='hidden md:flex font-mono space-x-6'>
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `px-3 py-1 rounded-full transition-all ${theme === 'dark' 
                                ? isActive 
                                    ? 'text-purple-400 border border-purple-400' 
                                    : 'hover:text-gray-400' 
                                : isActive 
                                    ? 'text-purple-600 border border-purple-600' 
                                    : 'hover:text-gray-600'}`
                        }
                    >
                        about
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/stacks" 
                        className={({ isActive }) => 
                            `px-3 py-1 rounded-full transition-all ${theme === 'dark' 
                                ? isActive 
                                    ? 'text-purple-400 border border-purple-400' 
                                    : 'hover:text-gray-400' 
                                : isActive 
                                    ? 'text-purple-600 border border-purple-600' 
                                    : 'hover:text-gray-600'}`
                        }
                    >
                        stacks
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/pro1" 
                        className={({ isActive }) => 
                            `px-3 py-1 rounded-full transition-all ${theme === 'dark' 
                                ? isActive 
                                    ? 'text-purple-400 border border-purple-400' 
                                    : 'hover:text-gray-400' 
                                : isActive 
                                    ? 'text-purple-600 border border-purple-600' 
                                    : 'hover:text-gray-600'}`
                        }
                    >
                        projects
                    </NavLink>
                </li>
            </ul>

            <div className='flex items-center space-x-4'>
                <button
                    onClick={toggleTheme}
                    className={`p-2 bg-transparent rounded transition-all focus:outline-none ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                >
                    {theme === 'dark' ? <CiLight /> : <MdOutlineDarkMode />}
                </button>

                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <CiMenuBurger size={20} /> : <IoClose size={20} />}
                </div>
            </div>

            <div className={
                nav
                    ? `fixed top-0 left-0 text-2xl font-serif w-[60%] border-r h-full z-50 ${theme === 'dark' ? 'bg-[#000300] border-gray-700' : 'bg-white border-gray-200'} ease-in-out duration-500`
                    : 'fixed left-[-100%] ease-in-out duration-500'
            }>
                <ul className='pt-24 uppercase'>
                    <li className={`p-5 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                `px-3 py-1 rounded-full transition-all ${theme === 'dark' 
                                    ? isActive 
                                        ? 'text-purple-400 border border-purple-400' 
                                        : 'hover:text-gray-400' 
                                    : isActive 
                                        ? 'text-purple-600 border border-purple-600' 
                                        : 'hover:text-gray-600'}`
                            }
                        >
                            about me
                        </NavLink>
                    </li>
                    <li className={`p-5 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                        <NavLink 
                            to="/stacks" 
                            className={({ isActive }) => 
                                `px-3 py-1 rounded-full transition-all ${theme === 'dark' 
                                    ? isActive 
                                        ? 'text-purple-400 border border-purple-400' 
                                        : 'hover:text-gray-400' 
                                    : isActive 
                                        ? 'text-purple-600 border border-purple-600' 
                                        : 'hover:text-gray-600'}`
                            }
                        >
                            stacks
                        </NavLink>
                    </li>
                    <li className={`p-5 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                        <NavLink 
                            to="/pro1" 
                            className={({ isActive }) => 
                                `px-3 py-1 rounded-full transition-all ${theme === 'dark' 
                                    ? isActive 
                                        ? 'text-purple-400 border border-purple-400' 
                                        : 'hover:text-gray-400' 
                                    : isActive 
                                        ? 'text-purple-600 border border-purple-600' 
                                        : 'hover:text-gray-600'}`
                            }
                        >
                            projects
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
