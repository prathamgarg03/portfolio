import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { github, linkedin } from '../../constants';


function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 body-font border-t border-gray-200 mt-auto w-full">
      <div className="container mx-auto py-8 flex items-center sm:flex-row flex-col">   
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © {new Date().getFullYear()} Pratham Garg
        </p>    
        
        <div className="sm:ml-auto sm:mt-0 mt-4 flex justify-center sm:justify-start">
          <a href={github} className="text-gray-500 ml-3">
            <FaLinkedin />
          </a>
          <a href={linkedin} className="text-gray-500 ml-3">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
