import { IoIosArrowForward } from 'react-icons/io'
import aboutus from 'assets/aboutus.jpg'

const AboutUs = () => {
  return (
    <section className='w-full bg-secondary py-32 flex justify-center text-white'>
      <div className='ml-[4.5%] w-[86%] flex'>
        {/* Left side */}
        <div className='basis-1/2'>
          <h2 className='font-normal'>ABOUT US</h2>

          <p className='text-3xl mt-10 mb-6'>
            WE EXPLORE <br />
            TO EMPOWER
          </p>

          <a href='#'>
            <div className='w-fit flex items-center justify-between text-sm text-milk group'>
              <span className='mr-3 '>READ MORE</span>
              <IoIosArrowForward className='group-hover:translate-x-2 transform transition duration-300 ease-out' />
            </div>
          </a>
        </div>

        {/* Right side */}
        <div className='basis-1/2'>
          <div className='flex gap-10 mb-20'>
            <div className='basis-1/2 text-milk'>
              Ignite Your Journey to Unprecedented Success with Empowering
              Solutions, Exceptional Quality Products, and Unrivaled Service
              Excellence. Trust in our unwavering commitment to elevate
              industries and exceed expectations.
            </div>
            <div className='basis-1/2 text-milk/50'>
              ENCO SUPPLY is a trusted provider of comprehensive industrial
              solutions. We offer exceptional quality products and unparalleled
              service to various industries. Choose us for our extensive
              expertise, competitive prices, and commitment to your success.
              Experience our unwavering support and become a part of our
              satisfied customer base
            </div>
          </div>
          <div>
            <img
              src={aboutus}
              alt='worker'
              className='rounded-lg shadow-md cut_left'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
