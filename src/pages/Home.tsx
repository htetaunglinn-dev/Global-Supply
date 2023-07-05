import hero_background from 'assets/background.png'
import { VideoPlayer } from 'components/Navbar/VideoPlayer'
import { IoIosArrowForward } from 'react-icons/io'
import AboutUs from './AboutUs'
import BusinessSection from './BusinessSection'

const Home = () => {
  return (
    <div className='bg-secondary'>
      <section className='relative rounded-br-lg'>
        <img
          src={hero_background}
          alt='hero-background'
          className='h-[100vh] w-[95%] object-cover shadow-md'
        />
        <div className='absolute top-0 h-[100vh] w-[95%]  flex justify-center items-center'>
          <div className='flex w-[80%]'>
            {/* Left side */}
            <section className='basis-1/2'>
              <h1 className='text-9xl font-light'>
                WE BUILD <br /> <span className='font-bold'>STRONGER</span>
                <br /> FUTURE
              </h1>

              <div className='my-5 drop-shadow-sm font-normal'>
                <p>Building stronger future</p>
                <p>one steel beam at a time</p>
              </div>

              <a href='#'>
                <div className='flex items-center justify-between text-xs w-[180px] pl-4 pr-2 py-3 bg-black hover:bg-black/80 shadow-md transition-all duration-300 ease-out text-white rounded-md'>
                  <span>EXPLORE THE BEST </span>
                  <IoIosArrowForward />
                </div>
              </a>
            </section>

            {/* Right side */}
            <section className='basis-1/2 flex justify-center items-end'>
              <VideoPlayer />
            </section>
          </div>
        </div>
      </section>

      {/* About us section */}
      <AboutUs />

      {/* Business Section */}
      <BusinessSection />
    </div>
  )
}

export default Home
