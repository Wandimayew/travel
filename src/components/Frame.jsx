import React from 'react'
import one from '../assets/icons/1.png'
import one1 from '../assets/icons/2.png'
import one3 from '../assets/icons/4.png'
import one5 from '../assets/icons/6.png'

const Frame = () => {
  return (
    <div className='w-full lg:w-2/3 '>
        <div className='flex justify-between flex-wrap gap-3'>
        <img src={one} alt='image' className='md:w-20 md:h-20 w-14 h-14'/>
        <img src={one1} alt='image' className='md:w-20 md:h-20 w-14 h-14'/>
        <img src={one} alt='image' className='md:w-20 md:h-20 w-14 h-14'/>
        <img src={one3} alt='image' className='md:w-20 md:h-20 w-14 h-14'/>
        <img src={one1} alt='image' className='md:w-20 md:h-20 w-14 h-14'/>
        <img src={one5} alt='image' className='md:w-20 md:h-20 w-14 h-14'/>
        </div>
    </div>
  )
}

export default Frame