import React from 'react'
import Title from '../title/Title'
import Button from '../button/Button'
import service1 from '../../assets/Rectangle 27.png'
import service2 from '../../assets/Rectangle 27-1.png'
import service3 from '../../assets/Rectangle 27-2.png'

const Service = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center '>
            <div className='space-y-2 w-full'>
                <Title>Service</Title>
                <h1 className='text-4xl font-bold max-w-sm'>Empowering Health, Enriching Lives</h1>
                <p className='max-w-sm xl:max-w-lg'>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                <Button style={"bg-accent text-black hover:bg-transparent hover:text-black hover:border-accent"}>Appointment</Button>
            </div>
            <div className='relative w-full'>
                <img src={service3} alt="x-ray report image" className='rounded-3xl ' />
                <div className='absolute left-5 bottom-5 bg-themeColor opacity-70 text-white max-w-80 p-4 rounded-lg'>
                    <h1 className='text-xl font-semibold'>Advanced Technology</h1>
                    <p className='max-w-md'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                </div>
            </div>
            <div className='relative w-full'>
                <img src={service2} alt="x-ray report image" className='rounded-3xl ' />
                <div className='absolute left-5 bottom-5 bg-themeColor opacity-70 text-white max-w-80 p-4 rounded-lg'>
                    <h1 className='text-xl font-semibold'>Online Doctor Meet</h1>
                    <p className='max-w-md'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                </div>
            </div>
            <div className='relative w-full'>
                <img src={service1} alt="x-ray report image" className='rounded-3xl ' />
                <div className='absolute left-5 bottom-5 bg-themeColor opacity-70 text-white max-w-80 p-4 rounded-lg'>
                    <h1 className='text-xl font-semibold'>Consultancy your health</h1>
                    <p className='max-w-md'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                </div>
            </div>
        </div>
    )
}

export default Service