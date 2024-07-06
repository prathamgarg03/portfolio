import React from 'react'
import { projects } from '../../constants/index.jsx'
import DrawerDefault from '../Drawer/DrawerDefault'
import About from '../About/About.jsx'
import { resumeAbout } from '../../constants/index.jsx'
function Projects() {
  return (
    <div className='mt-5 max-w-5xl mx-auto '>
      <div className='ml-4'>
        <div className='text-2xl font-bold'>Projects</div>
        <div className='text-sm'>
          Notable Projects
        </div>
      </div>
      <hr className='text-skin-200 my-[1rem] sm:my-[2rem]' />

      <div className="flex flex-col sm:flex-row">
        <div className='flex-grow mb-4 sm:mb-0'>
          <DrawerDefault results={projects} />
        </div>
        <div className='w-full sm:w-1/2 hidden sm:block'>
          <About info={resumeAbout} />
        </div>
      </div>
      <hr className='text-skin-200 my-[1rem] sm:my-[2rem]' />
    </div>
  )
}

export default Projects
