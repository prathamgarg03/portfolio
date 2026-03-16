import React from 'react'
import { projects } from '../../constants/index.jsx'
import DrawerDefault from '../Drawer/DrawerDefault'
import About from '../About/About.jsx'
import { resumeAbout } from '../../constants/index.jsx'
import { Helmet } from 'react-helmet-async';
function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Pratham Garg - Software Developer</title>
        <meta name="description" content="Explore the software and web development projects created by Pratham Garg, Computing Science student at Simon Fraser University." />
      </Helmet>
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
    </>
  )
}

export default Projects
