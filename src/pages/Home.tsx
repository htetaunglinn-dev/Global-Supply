import hero_background from 'assets/background.png'
import { VideoPlayer } from 'components/Navbar/VideoPlayer'
import { IoIosArrowForward } from 'react-icons/io'
import { Fade } from 'react-awesome-reveal'
import { useState, useEffect } from 'react'

import AboutUs from './AboutUs'
import LoadingScreen from 'components/LoadingScreen/LoadingScreen'
import BusinessSection from './BusinessSection'

const Home = () => {
  const [areImagesLoaded, setAreImagesLoaded] = useState(false)

  console.log('areImagesLoaded', areImagesLoaded)

  useEffect(() => {
    const handleImageLoad = () => {
      setAreImagesLoaded(true)
    }

    // Preload images and listen for image load events
    const imageUrls = [hero_background]
    imageUrls.forEach(url => {
      const img = new Image()
      img.src = url
      img.addEventListener('load', handleImageLoad)
    })

    // Clean up event listeners when component unmounts
    return () => {
      imageUrls.forEach(url => {
        const img = new Image()
        img.src = url
        img.removeEventListener('load', handleImageLoad)
      })
    }
  }, [])

  return (
    <>
      {areImagesLoaded ? (
        <div className='bg-secondary overflow-y-hidden'>
          <section className='relative min-h-screen rounded-br-lg'>
            <img
              src={hero_background}
              alt='hero-background'
              className='min-h-screen w-full lg:w-[95%] object-cover shadow-md cut__right'
            />
            {/* Intor section */}
            <div className='absolute top-0 h-[100vh] w-full lg:w-[95%] lg:pt-20 xl:pt-0 flex justify-center items-center'>
              <div className='flex w-[80%]'>
                {/* Left side */}
                <section className='basis-1/2'>
                  <h1 className='text-[3rem] sm:text-7xl md:text-8xl lg:text-9xl font-light'>
                    <Fade cascade damping={0.5}>
                      <ul>
                        <li>WE BUILD</li>
                        <li>
                          <span className='font-bold'>STRONGER</span>
                        </li>
                        <li>FUTURE</li>
                      </ul>
                    </Fade>
                  </h1>

                  <div className='my-5 drop-shadow-sm font-normal'>
                    <Fade cascade>
                      <p>Building stronger environment</p>
                      <p>the biggest supply chain</p>
                    </Fade>
                  </div>

                  <Fade>
                    <a href='#'>
                      <div className='flex items-center justify-between text-xs w-[180px] pl-4 pr-2 py-3 bg-black hover:bg-black/80 shadow-md transition-all duration-300 ease-out text-white rounded-md'>
                        <span>EXPLORE THE BEST </span>
                        <IoIosArrowForward />
                      </div>
                    </a>
                  </Fade>
                </section>

                {/* Right side */}
                <section className='basis-1/2 hidden xl:flex justify-center items-end'>
                  <Fade delay={0.3}>
                    <VideoPlayer />
                  </Fade>
                </section>
              </div>
            </div>
          </section>

          {/* About us section */}
          <AboutUs />

          {/* Business Section */}
          <BusinessSection />
        </div>
      ) : (
        <>
          <LoadingScreen />
        </>
      )}
    </>
  )
}

export default Home
