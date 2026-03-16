import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/photos/logo.png';
import Search from '../Search/Search';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <React.Fragment>
            <Helmet>
                <title>Pratham Garg | Computing Science Student at SFU</title>
                <meta name="description" content="Portfolio of Pratham Garg, a Computing Science student at Simon Fraser University. View my projects, skills, and software development experience." />
            </Helmet>
            <div className="flex justify-center mt-8 sm:mt-16">
                <div className="flex flex-col items-center mt-8 sm:mt-16">
                    <div className='flex flex-col items-center mb-4 sm:mb-8'>
                        <img src={logo} className="w-1/2 sm:w-1/3 mb-2" alt="Logo" />
                    </div>
                    <div className='w-11/12 sm:w-2/3 md:w-1/2'>
                        <Search />
                    </div>
                    
                    <div className="flex flex-row mt-7">
                        <NavLink
                            to="/resume"
                            className="py-2 px-4 mx-1 sm:mx-3 mb-2 sm:mb-0 bg-gray-50 text-gray-600 rounded-md hover:ring-gray-200 hover:ring-1"
                        >
                            Resume
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className="py-2 px-4 mx-1 sm:mx-3 bg-gray-50 text-gray-600 rounded-md hover:ring-gray-200 hover:ring-1"
                        >
                            Projects
                        </NavLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}