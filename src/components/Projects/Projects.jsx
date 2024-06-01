import React from 'react'
import { projects } from '../../constants/index.jsx'
import DrawerDefault from '../Drawer/DrawerDefault'
import About from '../About/About.jsx'
import { resumeAbout } from '../../constants/index.jsx'
function Projects() {
  return (
    <div className='mt-5 max-w-5xl mx-auto'>
      <div className='text-2xl font-bold'>Projects</div>
      <div className='text-sm'>
        Notable Projects
      </div>
      <hr className='text-skin-200 my-[2rem]'/>
      <div className="flex">
        <div className='flex-grow'>
          <DrawerDefault results={projects} />
        </div>
        <div className='w-1/2'>
          <About info={resumeAbout}/>
        </div>
      </div>
      <hr className='text-skin-200 my-[2rem]'/>
    </div>
  )
}

export default Projects
