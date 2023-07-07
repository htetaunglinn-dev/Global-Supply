import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import { Fade, Slide } from 'react-awesome-reveal'
import { profiles } from 'utils/profiles'

const Management = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider')
    if (slider !== null) {
      slider.scrollLeft -= 360
    }
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    if (slider !== null) {
      slider.scrollLeft += 360
    }
  }

  return (
    <div className='w-full bg-secondary pt-36 overflow-hidden'>
      <section className='pl-[9.5%] w-screen'>
        {/* Heading */}
        <div className='mb-10 flex justify-between items-end pr-10 lg:pr-20'>
          <Fade cascade delay={0.3} direction='left'>
            <div className='text-white'>
              <h2 className=' text-white'>Management </h2>
              <p className='text-5xl mt-6 md:my-6 sm:mb-0 uppercase'>
                <span className='block'>Our</span> directors
              </p>
            </div>
          </Fade>
          <Fade cascade delay={0.3} direction='right'>
            <div className='hidden md:flex gap-2 lg:gap-6'>
              <div className='cursor-pointer opacity-50 hover:opacity-10 ease-in-out duration-200'>
                <AiFillLeftCircle onClick={slideLeft} color='#fff' size={40} />
              </div>
              <div className='cursor-pointer opacity-50 hover:opacity-10 ease-in-out duration-200'>
                <AiFillRightCircle
                  onClick={slideRight}
                  color='#fff'
                  size={40}
                />
              </div>
            </div>
          </Fade>
        </div>

        {/* Sliders */}
        <div
          id='slider'
          className='grid grid-flow-col gap-7 overflow-x-scroll scroll scroll-smooth overflow-hidde horizontal-hidden py-10 pr-8'
        >
          <Slide direction='right' triggerOnce>
            {profiles.map((img, i) => {
              return (
                <div
                  className='cursor-pointer hover:scale-105 ease-in-out duration-300 drop-shadow-sm'
                  key={i}
                >
                  <div className='max-w-sm bg-secondary w-72 h-[460px] border border-gray-200/20 rounded-lg shadow '>
                    <div className='p-2 h-64'>
                      <img
                        className='h-full w-full cut_left object-cover'
                        src={img}
                        alt=''
                      />
                    </div>

                    <div className='p-2'>
                      <p className='mb-1 text-2xl  font-normal tracking-tight text-white'>
                        John Doe
                      </p>
                      <p className='mb-2 text-base tracking-tight text-white'>
                        Manager
                      </p>

                      <p className='py-3 text-base text-white'>
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slide>
        </div>
      </section>
    </div>
  )
}

export default Management
