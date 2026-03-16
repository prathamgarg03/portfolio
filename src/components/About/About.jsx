import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { github, linkedin, email } from '../../constants';
import ContactForm from '../ContactForm/ContactForm'; // We will create this

function About({ info }) {
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <div className="font-sans w-full max-w-3xl mx-auto pb-4">
            <div className="bg-white rounded-[12px] overflow-hidden border border-[#ebebeb] shadow-sm">
                
                {/* Header and Description */}
                <div className="p-6 sm:p-7 pb-0">
                    <h2 className="text-[26px] text-[#202124] leading-tight font-medium mb-4">
                        {info.title}
                    </h2>
                    <div className="text-[15px] leading-[1.6] text-[#4d5156] mb-6 pr-2">
                        {info.description}
                    </div>
                </div>
                
                {/* Information Sections */}
                <div className="px-6 sm:px-7 space-y-5">
                    {info.section.map((sectionSet, index) => {
                        return (
                            <div key={index} className="flex flex-col">
                                <h3 className="text-[15px] font-bold text-[#202124] mb-1.5">
                                    {sectionSet.header}
                                </h3>
                                <div className="text-[15px] text-[#4d5156] leading-[1.6]">
                                    {sectionSet.text.map((textItem, subIndex) => (
                                        <span key={subIndex}>
                                            {textItem}
                                            {subIndex < sectionSet.text.length - 1 && sectionSet.text.length > 1 && ", "}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Divider */}
                <div className="mx-6 sm:mx-7 mt-8 pt-5 border-t border-[#ebebeb]">
                    <h3 className="text-[15px] font-bold text-[#202124] mb-4">Contact Me</h3>
                    <div className="flex items-center pb-7 gap-6 text-[#5f6368]">
                        <a 
                            href={github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[26px] hover:text-[#202124] transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a 
                            href={linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[26px] hover:text-[#0a66c2] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <button 
                            onClick={() => setShowContactForm(true)}
                            className="flex items-center gap-2 px-3 pl-2.5 py-1.5 border border-[#dadce0] rounded-[6px] text-[#202124] hover:bg-[#f8f9fa] hover:border-[#d2e3fc] hover:text-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all group"
                        >
                            <HiOutlineMail className="text-[22px] text-[#5f6368] group-hover:text-blue-500 transition-colors" /> 
                            <span className="text-[14px] font-medium pr-1">
                                Send Message
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal for Contact Form */}
            {showContactForm && (
                <ContactForm 
                    email={email} 
                    onClose={() => setShowContactForm(false)} 
                />
            )}
        </div>
    );
}

export default About;