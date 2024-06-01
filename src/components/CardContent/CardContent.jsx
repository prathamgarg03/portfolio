import React from 'react'
import Microlink from '@microlink/react'

function CardContent({selectedCard}) {
  return (
    <div className="space-y-4">
        {selectedCard.content.map((item, index) => (
            <div key={index} className="mb-4">
                <div className="flex justify-between">
                    <div className="text-lg black">{item.title}</div>
                    <div className="text-md text-black">{item.date}</div>
                </div>
                <div className="flex justify-between">
                    <div className="text-sm text-gray-500">{item.subtitle}</div>
                    <div className="text-sm text-gray-500">{item.location}</div>
                </div>
                
                <div className="mt-1 text-gray-600">
                    {item.text.map((text, index) => (
                    <div key={index} className="mb-1">{text}</div>
                    ))}
                </div>
                    
                <div className='mt-4'>
                    {item.githubLink && <Microlink url={item.githubLink} className=" rounded-xl mb-2"/>}
                    {item.liveLink && <Microlink url={item.liveLink} className=" rounded-xl"/>}
                </div>

            </div>
        ))}
    </div>
  )
}

export default CardContent