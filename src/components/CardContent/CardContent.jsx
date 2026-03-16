import React from 'react'
import LinkPreview from '../LinkPreview/LinkPreview'

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
                    
                <div className='mt-4 space-y-2'>
                    {item.githubLink && <LinkPreview url={item.githubLink} type="github" />}
                    {item.liveLink && <LinkPreview url={item.liveLink} type="live" />}
                </div>

            </div>
        ))}
    </div>
  )
}

export default CardContent