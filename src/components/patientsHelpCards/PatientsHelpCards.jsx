import chartImage from '../../assets/chart.png'
import certificateImage from '../../assets/certificate.png'
import star from '../../assets/star.png'
import reviewerImage from '../../assets/reviewer.png'
import money from '../../assets/money.png'
import lesson from '../../assets/lesson.png'
const PatientsHelpCards = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-4 justify-center md:justify-between w-full ">
            <div className="bg-white p-4  md:w-[20%] rounded-lg shadow-md shadow-black">
                <h1 className='text-5xl font-bold'>90%</h1>
                <p className='max-w-sm'>Patient satisfaction rate, reflecting our commitment.</p>
                <img src={chartImage} alt="chart image" className='w-full p-4' />

            </div>
            <div className='flex flex-col md:flex-row w-full justify-center  md:justify-between gap-4'>
                <div className='flex-1 flex flex-col gap-4 '>
                    <h1 className='text-5xl font-bold max-w-lg  text-center mx-auto'>Comprehensive Care for Every Patient</h1>
                    <div className='flex flex-col md:flex-row justify-center md:items-end gap-4  lg:gap-16 '>
                        <div className="bg-[#FBFBFB] p-4 rounded-lg space-y-2 shadow-md shadow-black">
                            <h1 className='text-5xl font-bold'>500+</h1>
                            <p className='max-w-[10rem]'>Board-certified doctors.</p>
                            <div className='flex justify-end'>
                                <img src={certificateImage} alt="chart image" className='w-16 h-16' />

                            </div>

                        </div>
                        <div className="bg-[#FBFBFB] p-4 rounded-lg space-y-2  shadow-md shadow-black">
                            <div className='flex gap-2 items-center '>
                                <h1 className='text-5xl font-bold'>4.8</h1>
                                <img src={star} alt="star icon  " className='w-6 h-6' />
                            </div>
                            <p className='max-w-[10rem]'>Over 20,000 Patient.</p>
                            <img src={reviewerImage} alt="chart image" className='w-28 ' />

                        </div>
                        <div className="bg-[#FBFBFB] p-4 rounded-lg space-y-2  shadow-md shadow-black  ">
                            <h1 className='text-5xl font-bold'>$5000</h1>
                            <p className='max-w-[10rem]'>Money spend
                                for poor patient.</p>
                            <div className='flex justify-end'>
                                <img src={money} alt="chart image" className='w-16 h-16' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FBFBFB] p-4 rounded-lg w-full md:w-[20%] space-y-2  shadow-md shadow-black ">
                    <h1 className='text-5xl font-bold'>50+</h1>
                    <p className='max-w-[10rem]'>Free lession video
                        for patient</p>
                    <img src={lesson    } alt="chart image" className='w-full p-4'/>

                </div>
            </div>
        </div>
    )
}

export default PatientsHelpCards