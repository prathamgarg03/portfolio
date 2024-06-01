import React from 'react'
import { Card } from '../Card/Card'
import About from '../About/About'
import { results, resumeAbout } from '../../constants/index.jsx'
import DrawerDefault from '../Drawer/DrawerDefault'

function Resume() {
  return (
    <div className='mt-5 max-w-5xl mx-auto'>
      <div className='text-2xl font-bold'>Pratham Garg</div>
      <div className='text-sm mb-3'>Computer Science Student at SFU</div>
      <Card />

      <hr className='text-skin-200 my-[2rem]'/>

      <div className="flex">
        <div className='flex-grow'>
          <DrawerDefault results={results} />
        </div>
        <div className='w-1/2'>
          <About info={resumeAbout}/>
        </div>
      </div>
      <hr className='text-skin-200 my-[2rem]'/>
    </div>
  )
}

export default Resume
