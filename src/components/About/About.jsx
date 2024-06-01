import React from 'react'
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { github, linkedin, email } from '../../constants';
function About({info}) {
    return (
        <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-3">
                    <div className="text-xl font-semi-bold text-gray-800">{info.title}</div>
                    <div className="text-gray-600 mt-2 text-sm">
                        {info.description}
                    </div>
                </div>
                
                <div className="mb-2 text-sm">
                    {info.section.map((sectionSet, index) => (
                        <div key={index} className='mb-2'>
                            <div className="font-bold text-gray-800">{sectionSet.header}</div>
                            <ul className=" text-black">
                                {sectionSet.text.map((textItem, subIndex) => (
                                    <li key={subIndex} className="flex flex-col">
                                        <span className="text-gray-600">{textItem}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className='text-sm'>
                    <div className="font-semibold text-gray-800 mb-2">Contact Me</div>
                    <div className="flex justify-start items-center text-gray-700">
                        <Link to={github} className="text-2xl px-2">
                            <FaGithub />
                        </Link>
                        <Link to={linkedin} className="text-2xl px-2">
                            <FaLinkedin />
                        </Link>
                        <div className="text-3xl px-2 flex items-center">
                            <HiOutlineMail className="mr-1" /> 
                            <a href={`mailto:${email}`} className="text-sm hover:underline">{email}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About