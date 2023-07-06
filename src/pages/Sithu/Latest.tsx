import { IoIosArrowForward } from "react-icons/io"
import { Fade } from 'react-awesome-reveal'

const Latest = () => {
    return (
        <>
            <div className='w-full bg-white py-32' >
                <div className="mb-10 flex justify-between  items-end px-10  lg:px-20">
                    <Fade cascade delay={0.3} direction='left'>
                        <div>
                            <p className="uppercase">
                                News
                            </p>
                            <p className="uppercase pt-5 text-2xl">Latest News</p>
                        </div>
                    </Fade>
                    <Fade cascade delay={0.3} direction='right'>
                        <div className=''>
                            <a href='#'>
                                <div className='w-fit flex items-center justify-between text-sm group text-primary'>
                                    <span className='mr-3 '>READ MORE</span>
                                    <IoIosArrowForward className='group-hover:translate-x-2 transform transition duration-300 ease-out' />
                                </div>
                            </a>
                        </div>
                    </Fade>
                    
                </div>

                <div className="grid grid-flow-col gap-7 overflow-x-scroll scroll scroll-smooth overflow-hidden  horizontal-hidden pl-10 lg:pl-20 py-10 pr-8">
                    {[0,1,3,4,5,6,7,8,9,10,11].map((_, i ) => {
                        return (
                            <Fade cascade delay={0.1} direction='right'>
                                <div className="cursor-pointer hover:scale-105 ease-in-out duration-300" key={i}>
                                    <div className="max-w-sm bg-white w-72 h-[430px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " >
                                        <div className="p-2 h-52">
                                            <img className="h-full w-full cut_left object-cover" src="https://images.pexels.com/photos/3186949/pexels-photo-3186949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        </div>
                                        
                                        <div className="p-2">
                                            <p className="mb-2 text-lg  font-normal tracking-tight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                                            <p className="mb-4 text-sm text-gray-500 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime corrupti voluptate dolores fugit ipsam rerum temporibus omnis debitis labo.</p>
                                            <div className="flex  justify-between">
                                                <p className="text-sm text-gray-500 tracking-tight">More</p>
                                                <p className="text-lg  font-normal tracking-tight">06.02</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </Fade>
                            
                        )
                    })} 
                </div>
            </div>
        </>
    )
}

export default Latest
