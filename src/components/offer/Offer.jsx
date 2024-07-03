import React from 'react'
import offerBanner from '../../assets/Rectangle 32.png'
import Button from '../button/Button'
import logoLight from '../../assets/logo light.png'
const Offer = () => {
    return (
        <div className='relative rounded-full w-full'>
            <img src={offerBanner} alt="hero banner image" className='w-full h-full rounded-3xl' />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#020043FF] to-[#0200434D] rounded-3xl'></div>
            <div className='absolute top-0 left-0 w-full h-full flex  justify-between p-2 md:p-12 text-white'>
                <div className='flex flex-col items-start justify-center gap-4 '>
                    <h1 className='text-lg md:text-5xl font-bold max-w-sm md:max-w-md'>Get Your
                        First Appointment
                        at 50% Off!</h1>
                    <div className='flex flex-row items-center gap-4'>
                        <Button style={"bg-accent text-black hover:bg-transparent hover:text-white hover:border-accent"}>Appointment</Button>
                        <Button style={'rounded-lg bg-transparent text-white hover:bg-slate-800 hover:text-white border-white font-bold'}>Learn more</Button>
                    </div>
                </div>
                <div>

                    <img src={logoLight} alt="logo" className='w-16 md:w-auto' />
                </div>
            </div>
        </div>
    )
}

export default Offer