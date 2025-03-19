import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { useTheme } from '../context/ThemeContext'; // Import the theme context
import { CiLight } from "react-icons/ci";    
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';

function Navbar() {
    const [nav, setNav] = useState(false);
    const { theme, toggleTheme } = useTheme(); // Use theme and toggle function

    const handleNav = () => {
        setNav(!nav);
    };

    return (    
        <div className={`flex justify-between h-24 max-w-[800px] mx-auto pt-16 px-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <div>
                <h1 className={`py-0.5 w-max text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Meeth Patel
                </h1>
                <div className='flex items-center space-x-2'>
                    <BsTwitterX size={20} />
                    <a
                        href='https://x.com/meeth27'
                        target='_blank'
                        rel="noopener noreferrer"
                        className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        meeth27
                    </a>
                </div>
            </div>

            <ul className='hidden md:flex space-x-6'>
                <li className={`${theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>
                    <Link to="/">about</Link>
                </li>
                <li className={`${theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>
                    <Link to="/stacks">stacks</Link>
                </li>
                <li className={`${theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>
                    <Link to="/projects">projects</Link>
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
                    <li className={`p-5 border-b ${theme === 'dark' ? 'border-gray-700 hover:text-gray-400' : 'border-gray-200 hover:text-gray-600'}`}>
                        <Link to="/">about me</Link>
                    </li>
                    <li className={`p-5 border-b ${theme === 'dark' ? 'border-gray-700 hover:text-gray-400' : 'border-gray-200 hover:text-gray-600'}`}>
                        <Link to="/stacks">stacks</Link>
                    </li>
                    <li className={`p-5 border-b ${theme === 'dark' ? 'border-gray-700 hover:text-gray-400' : 'border-gray-200 hover:text-gray-600'}`}>
                        <Link to="/projects">projects</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
