import { IoIosArrowForward } from 'react-icons/io'
import aboutus from 'assets/aboutus.jpg'
import { Fade } from 'react-awesome-reveal'

const AboutUs = () => {
  return (
    <section className='w-full min-h-screen bg-secondary py-32 flex  justify-center text-white'>
      <div className='ml-[4.5%] w-[86%] flex flex-col md:flex-row gap-5'>
        {/* Left side */}
        <div className='basis-1/2'>
          <Fade cascade delay={0.3} direction='left' duration={1500}>
            <h2 className='font-normal'>ABOUT US</h2>

            <p className='text-3xl mt-10 mb-6'>
              WE SUPPLY <br />
              TO EMPOWER
            </p>

            <a href='#'>
              <div className='w-fit flex items-center justify-between text-sm text-milk group'>
                <span className='mr-3 '>READ MORE</span>
                <IoIosArrowForward className='group-hover:translate-x-2 transform transition duration-300 ease-out' />
              </div>
            </a>
          </Fade>
        </div>

        {/* Right side */}
        <div className='basis-1/2'>
          <div className='flex flex-col lg:flex-row gap-10 mb-20'>
            <Fade cascade direction='up' duration={1500}>
              <div className='basis-1/2 text-milk'>
                Global SUPPLY is a trusted provider of comprehensive industrial
                solutions. We offer exceptional quality products and
                unparalleled service to various industries. Choose us for our
                extensive expertise, competitive prices, and commitment to your
                success. Experience our unwavering support and become a part of
                our satisfied customer base
              </div>
              <div className='basis-1/2 text-milk/50'>
                Ignite Your Journey to Unprecedented Success with Empowering
                Solutions, Exceptional Quality Products, and Unrivaled Service
                Excellence. Trust in our unwavering commitment to elevate
                industries and exceed expectations.
              </div>
            </Fade>
          </div>
          <div>
            <Fade direction='right' duration={1500}>
              <img
                src={aboutus}
                alt='worker'
                className='rounded-lg shadow-md cut_left'
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
