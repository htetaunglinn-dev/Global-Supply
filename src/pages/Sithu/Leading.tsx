import woman from 'assets/woman.png'
import { Fade } from 'react-awesome-reveal'
import { IoIosArrowForward } from 'react-icons/io'

const Leading = () => {
    return (
        <>
            <div className='relative h-screen '>
                <img
                    src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt='photo-background'
                    className='h-[70%] absolute bottom-0 w-full object-cover shadow-md blur-sm'
                />
                <div className='lg:block hidden'>
                    <img src={woman} alt="man-background" className='absolute h-[100%] w-min object-top' />
                </div>
                <div className='bg-sky-950 lg:w-[60%] sm:w-[80%] w-full h-[40%] absolute bottom-0 right-0 cut_top opacity-90'>
                    <p className='text-3xl mt-10 mb-6 lg:pl-36 pl-20 uppercase text-white'>
                        Infrastructure<br />
                        Leading
                    </p>
                    <Fade>
                        <a href='#'>
                            <div className='lg:ml-36 ml-20 flex items-center justify-between text-xs w-[180px] pl-4 pr-2 py-3 bg-white shadow-md transition-all duration-300 ease-out text-white rounded-md'>
                                <span className='text-black'>EXPLORE THE BEST </span>
                                <IoIosArrowForward color="black" />
                            </div>
                        </a>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default Leading
