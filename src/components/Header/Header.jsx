import React from 'react';
import logo from '../../assets/photos/logo.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Search from '../Search/Search';
import { github, linkedin } from '../../constants';

function Header() {
    const location = useLocation();

    const getPlaceholder = () => {
        switch (location.pathname) {
            case '/resume':
                return 'Resume';
            case '/projects':
                return 'Projects';
            default:
                return '';
        }
    };

    const showHeaderContent = location.pathname !== '/';

    return (
        <header className={`shadow sticky z-50 top-0 ${showHeaderContent ? '' : 'hidden'}`}>
            {showHeaderContent && (
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center px-10 mx-auto max-w-screen-xl">
                        <div className="flex justify-start">
                            <Link to="/" className="flex items-center">
                                <img src={logo} className=" h-12" alt="Logo" />
                            </Link>
                            
                        </div>
                        
                        <div className='w-1/3'>
                            <Search placeholder={getPlaceholder()} />
                        </div>
                        
                        <div className="flex justify-end items-center text-gray-700">
                            <Link to={github} className="text-2xl px-2">
                                <FaGithub />
                            </Link>
                            <Link to={linkedin} className="text-2xl px-2">
                                <FaLinkedin />
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/resume"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                                        }
                                    >
                                        Resume
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/projects"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                                        }
                                    >
                                        Projects
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;
