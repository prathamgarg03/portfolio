import React from 'react';
import { Card } from '../Card/Card';
import About from '../About/About';
import { results, resumeAbout } from '../../constants/index.jsx';
import DrawerDefault from '../Drawer/DrawerDefault';

function Resume() {
  return (
    <div className='mt-5 max-w-5xl mx-auto'>
      <div className='ml-4'>
        <div className='text-2xl font-bold'>Pratham Garg</div>
        <div className='text-sm mb-3'>Computer Science Student at SFU</div>
      </div>

      <Card />

      <hr className='text-skin-200 my-[1rem] sm:my-[2rem]' />

      <div className="flex flex-col sm:flex-row">
        <div className='flex-grow mb-4 sm:mb-0'>
          <DrawerDefault results={results} />
        </div>
        <div className='w-full sm:w-1/2 hidden sm:block'>
          <About info={resumeAbout} />
        </div>
      </div>
      <hr className='text-skin-200 my-[1rem] sm:my-[2rem]' />
    </div>
  );
}

export default Resume;
