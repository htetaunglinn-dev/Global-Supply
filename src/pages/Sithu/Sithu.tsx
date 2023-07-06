import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Sithu = () => {
    return (
        <>
            <div className='w-full bg-secondary mt-36 px-20 py-10' >
                <div className="mb-10">
                    <p className="text-white uppercase">
                        management
                    </p>
                    <p className="text-white uppercase pt-5 text-2xl"><span className="block">Our</span> directors</p>
                </div>

                <div id="slider" className="grid grid-flow-col gap-7 overflow-x-scroll scroll scroll-smooth p-3">
                    {[0,1,3,4,5,6,7,8,9,10,11].map((_, i ) => {
                        return (
                            <div className="cursor-pointer hover:scale-105 ease-in-out duration-300" key={i}>
                                <div className="max-w-sm bg-sky-950 w-80 h-[480px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " >
                                    <div className="p-3 h-64">
                                        <img className="h-full w-full object-cover" src="https://images.pexels.com/photos/13193108/pexels-photo-13193108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    </div>
                                    
                                    <div className="p-3">
                                        <p className="mb-1 text-2xl  font-normal tracking-tight text-white">John Doe</p>
                                        <p className="mb-2 text-base tracking-tight text-white">Manager</p>
                                        
                                        <p className="mb-3 text-base text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        
                                    </div>
                                </div> 
                            </div>
                        )
                    })} 
                </div>
            </div>
        </>

    )
}

export default Sithu
