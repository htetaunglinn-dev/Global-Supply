import { Fade } from 'react-awesome-reveal'
import { IoIosArrowForward } from 'react-icons/io'
import bg1 from 'assets/background2.png'
import bg2 from 'assets/bg-3.png'

const Leading = () => {
  return (
    <>
      <div className=' relative h-screen'>
        <div className=''>
          <img
            src={bg1}
            alt='photo-background'
            className='h-full hidden md:block absolute bottom-0 w-full object-cover md:object-cover '
          />
          <img
            src={bg2}
            alt='photo-background'
            className='h-full md:hidden absolute bottom-0 w-full object-cover md:object-cover '
          />
        </div>
        <div className='bg-milk lg:w-[60%] sm:w-[80%] w-full h-[40%] absolute -bottom-2 right-0 cut_top opacity-90'>
          <Fade cascade direction='right'>
            <p className='text-3xl mt-10 mb-6 lg:pl-36 pl-20 uppercase '>
              World Leading
              <br />
              Supplier
            </p>
          </Fade>
          <Fade direction='right' delay={0.3}>
            <a href='#'>
              <div className='lg:ml-36 ml-20 flex items-center justify-between text-xs w-[180px] pl-4 pr-2 py-3 bg-white shadow-md transition-all duration-300 ease-out text-white hover:bg-gray-100 rounded-md'>
                <span className='text-black'>EXPLORE THE BEST </span>
                <IoIosArrowForward color='black' />
              </div>
            </a>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default Leading
