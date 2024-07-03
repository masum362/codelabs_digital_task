import React from 'react'
import Title from '../title/Title'
import Button from '../button/Button'

import Banner from '../../assets/Rectangle 24.png'

const About = () => {
    return (
        <div className='flex flex-col gap-4 lg:flex-row items-center justify-between '>

            <div className='space-y-4'>
                <Title>Who we are</Title>
                <h1 className='text-4xl font-bold max-w-sm'>We Help To Get Soultions</h1>
                <p className='max-w-sm xl:max-w-lg'>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                <Button style={"bg-accent text-black hover:bg-transparent hover:text-black hover:border-accent"}>Learn more</Button>
            </div>
            <div className='relative'>
                <img src={Banner} alt="about banner image" />
                <div className='bg-themeColor p-4 xl:p-8 w-full my-4 md:my-0 md:w-72 xl:w-96 text-white rounded-lg md:absolute md:-bottom-28 md:-left-6 xl:-bottom-16 xl:-left-24 '>
                    <h1 className='font-bold text-3xl'>Our mission is simple</h1>

                    <p className='max-w-md'>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    )
}

export default About