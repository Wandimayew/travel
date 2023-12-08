import React from 'react'
import { MdOutlineStarRate } from 'react-icons/md'

const Card = ({image}) => {
    if (!image) {
        console.log("image is not available", image)
        return null; 
      }
  return (
    <div className='flex flex-1 flex-col max-w-3xl mx-auto gap-3  overflow-hidden shadow-lg '>
            <img src={image.image} alt={image.title} className='object-cover  rounded-t-xl h-48 w-96'/>
            <div className='flex justify-between flex-col p-4'>
            <p className='font-bold text-lg'>{image.title}</p>
            <p className='text-gray-500'>{image.location}</p>
            <div className='flex justify-between'>
            <p className='flex justify-center items-center text-[#e76a43]'>4.8 <MdOutlineStarRate /></p>
            <p className='text-[#00a3cb] font-bold'>{image.price}</p>
            </div>
            </div>
    </div>
  )
}

export default Card