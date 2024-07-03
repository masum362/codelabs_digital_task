import React from 'react'
import heroBanner from '../../assets/Rectangle 5.png'

const Hero = () => {
    return (
        <div className='relative rounded-full w-full'>
            <img src={heroBanner} alt="hero banner image" className='w-full h-full' />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#00C19D00] to-[#02004378] rounded-[50px]'></div>
        </div>
    )
}

export default Hero