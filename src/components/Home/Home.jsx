import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/photos/logo.png';
import Search from '../Search/Search';

export default function Home() {
    return (
        <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center mt-16">
                <Link className='flex flex-col items-center'>
                    <img src={logo} className="w-1/3 mb-2" alt="Logo" />
                </Link>
                <div className='w-1/2'>
                    <Search />
                </div>
                
                <div className="flex mt-7">
                    <NavLink
                        to="/resume"
                        className="py-2 px-4 mx-3 bg-gray-50 text-gray-600 rounded-md mr-2 hover:ring-gray-200 hover:ring-1"
                    >
                        Resume
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className="py-2 px-4 mx-3 bg-gray-50 text-gray-600 rounded-md hover:ring-gray-200 hover:ring-1"
                    >
                        Projects
                    </NavLink>
                </div>
            </div>
        </div>
    );
}