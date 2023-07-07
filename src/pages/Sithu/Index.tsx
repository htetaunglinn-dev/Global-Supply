import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import Latest from './Latest'
import { Fade } from 'react-awesome-reveal'
import Leading from './Leading'

const Sithu = () => {

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        if (slider !== null) {
            slider.scrollLeft -= 360;
        }
    }


    const slideRight = () => {
        var slider = document.getElementById('slider')
        if (slider !== null) {
            slider.scrollLeft += 360;
        }
    }

    return (
        <>
            <div className='w-full bg-secondary mt-36 py-32' >
                <div className="mb-10 flex justify-between px-10 items-end lg:px-20">
                    <Fade cascade delay={0.3} direction='left'>
                        <div>
                            <p className="text-white uppercase">management </p>
                            <p className="text-white uppercase pt-5 text-2xl"><span className="block">Our</span> directors</p>
                        </div>
                    </Fade>
                    <Fade cascade delay={0.3} direction='right'>
                        <div className='flex  gap-2 lg:gap-6'>
                            <div className='cursor-pointer opacity-50 hover:opacity-10 ease-in-out duration-200'>
                                <AiFillLeftCircle onClick={slideLeft} color="#fff" size={40} />
                            </div>
                            <div className='cursor-pointer opacity-50 hover:opacity-10 ease-in-out duration-200'>
                                <AiFillRightCircle onClick={slideRight} color="#fff" size={40} />
                            </div>
                        </div>
                    </Fade>
                    
                </div>

                <div id="slider" className="grid grid-flow-col gap-7 overflow-x-scroll scroll scroll-smooth overflow-hidden  horizontal-hidden pl-10 lg:pl-20 py-10 pr-8">
                    {[0,1,3,4,5,6,7,8,9].map((_, i ) => {
                        return (
                            
                            <div className="cursor-pointer hover:scale-105 ease-in-out duration-300" key={i}>
                                <div className="max-w-sm bg-sky-950 w-72 h-[460px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " >
                                    <div className="p-2 h-64">
                                        <img className="h-full w-full cut_left object-cover" src="https://images.pexels.com/photos/13193108/pexels-photo-13193108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    </div>
                                    
                                    <div className="p-2">
                                        <p className="mb-1 text-2xl  font-normal tracking-tight text-white">John Doe</p>
                                        <p className="mb-2 text-base tracking-tight text-white">Manager</p>
                                        
                                        <p className="py-3 text-base text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                </div> 
                            </div>
                            
                        )
                    })} 
                </div>
            </div>

            {/* Latest  */}
            <Latest />

            {/* Leading  */}
            <Leading />
        </>

    )
}

export default Sithu
