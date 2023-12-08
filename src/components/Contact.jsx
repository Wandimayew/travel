import React from 'react'
import image1 from '../assets/images/photo1.jpg'

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col lg:flex-row justify-between w-full items-start lg:pr-60'>
        <img src={image1} alt='image' className='object-fill w-full lg:w-2/3 h-auto sm:h-1/2 lg:h-[500px]'/>
        <div className='lg:w-1/3 w-full flex flex-col gap-5'>
            <h2 className='text-[#00a3cb] font-bold'>TRAVEL POINTS</h2>
            <p className='text-3xl font-bold'>We helping you find your dream location</p>
            <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam rem, ducimus, illo modi alias exercitationem nemo minus perferendis maxime nisi repellat porro maiores quos beatae quas consequuntur sit. Et, tempore.</p>
            <div className='flex m-3 py-4 flex-col sm:flex-row justify-center items-center sm:justify-evenly lg:justify-between gap-5'>
                <div className='border border-1 gap-3 w-1/2 md:w-1/4 lg:w-1/2 flex flex-col justify-center items-center h-28 rounded-xl'>
                <h1 className='text-[#e76a43] font-bold'>500+</h1>
                <p className='text-sm lg:text-lg text-gray-500'>Holiday Packages</p>
                </div>
                <div className='border border-1 gap-3 w-1/2 md:w-1/4 lg:w-1/2 flex flex-col justify-center items-center h-28 rounded-xl'>
                <h1 className='text-[#e76a43] font-bold'>100</h1>
                <p className='text-sm lg:text-lg text-gray-500'>Luxury Hotels</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact