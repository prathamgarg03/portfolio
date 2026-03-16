import React from 'react';
import logo from '../../assets/photos/logo.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
        <header className={`bg-white shadow z-50 ${showHeaderContent ? '' : 'hidden'}`}>
            <div className="container px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex justify-start items-center">
                        <img src={logo} className="h-10 sm:h-12" alt="Logo" />
                    </Link>
                    <div className="flex justify-end items-center text-gray-700">
                        <a href={github} target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl px-2">
                            <FaGithub />
                        </a>
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl px-2">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center my-2 sm:my-0">
                    <Search placeholder={getPlaceholder()} />
                </div>
                <div className="flex justify-center mt-2">
                    <ul className="flex flex-row font-medium sm:flex-row sm:space-x-8">
                        <li>
                            <NavLink
                                end
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-transparent hover:bg-gray-50 sm:hover:bg-transparent sm:border-0 hover:text-blue-500 sm:p-0 ${
                                        isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/resume"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-transparent hover:bg-gray-50 sm:hover:bg-transparent sm:border-0 hover:text-blue-500 sm:p-0 ${
                                        isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
                                    }`
                                }
                            >
                                Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-transparent hover:bg-gray-50 sm:hover:bg-transparent sm:border-0 hover:text-blue-500 sm:p-0 ${
                                        isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
                                    }`
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
