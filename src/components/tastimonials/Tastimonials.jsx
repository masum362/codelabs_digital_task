import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Rating } from 'react-simple-star-rating'
import Title from '../title/Title'
import client1 from '../../assets/client1.png'
import client2 from '../../assets/client2.png'
import client3 from '../../assets/client3.png'

const Tastimonials = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const reviews = [
        {
            id: 1,
            image: client1,
            name: "Sarah D.",
            profession: "IT Professor",
            title: "Expertise and Compassion Combined",
            description: "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
            rating: 5,
        },
        {
            id: 1,
            image: client2,
            name: "Michel R.",
            profession: "Business Executive",
            title: "Life-Saving Care, Life-Changing Experience",
            description: "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
            rating: 5,
        },
        {
            id: 1,
            image: client3,
            name: "David S.",
            profession: "Lawyer",
            title: "A Partner in Health and Wellness",
            description: "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
            rating: 5,
        },
        {
            id: 1,
            image: client2,
            name: "Sarah D.",
            profession: "IT Professor",
            title: "Expertise and Compassion Combined",
            description: "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
            rating: 5,
        },
        {
            id: 1,
            image: client3,
            name: "Michel R.",
            profession: "Business Executive",
            title: "Life-Saving Care, Life-Changing Experience",
            description: "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
            rating: 5,
        },
        {
            id: 1,
            image: client1,
            name: "David S.",
            profession: "Lawyer",
            title: "A Partner in Health and Wellness",
            description: "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
            rating: 5,
        },
        {
            id: 1,
            image: client3,
            name: "Sarah D.",
            profession: "IT Professor",
            title: "Expertise and Compassion Combined",
            description: "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
            rating: 5,
        },
        {
            id: 1,
            image: client2,
            name: "Michel R.",
            profession: "Business Executive",
            title: "Life-Saving Care, Life-Changing Experience",
            description: "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
            rating: 5,
        },
        {
            id: 1,
            image: client1,
            name: "David S.",
            profession: "Lawyer",
            title: "A Partner in Health and Wellness",
            description: "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
            rating: 5,
        },
    ]

    return (
        <div className='space-y-4'>
            <Title>Tastimonials</Title>
            <h1 className='font-bold text-4xl '>What they say about us</h1>


           <div className=' '>
           <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all 2"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                {
                    reviews.map(review => {
                        return <div key={review.id} >
                            <div className="max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[95%] p-4 space-y-2 bg-[#FFFFF5]">
                                <h1 className='text-2xl font-bold  '>{review.title}</h1>
                                <p className=''>{review.description}</p>
                                <div className='flex items-center justify-between w-full gap-4'>
                                    <img src={review.image} alt="image of reviewer" className='w-12 h-12' />
                                    <div className='flex flex-col items-start w-full gap-2'>
                                        <div className='flex'>
                                            <strong>{review.name}</strong>
                                            <span>{review.profession}</span>

                                        </div>
                                        <div
                                            style={{
                                                direction: 'ltr',
                                                fontFamily: 'sans-serif',
                                                touchAction: 'none'
                                            }}

                                            className='w-full flex items-center'
                                        >
                                            <Rating
                                                initialValue={review.rating}
                                                size={36}
                                                onClick={function noRefCheck() { }}
                                                readonly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </Carousel>

           </div>
        </div>
    )
}

export default Tastimonials