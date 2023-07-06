import { Fade } from 'react-awesome-reveal'
import { IoIosArrowForward } from 'react-icons/io'
import { stocks } from 'utils/stocks'

const BusinessSection = () => {
  return (
    <section className='w-full bg-white py-32 flex justify-center'>
      <div className='ml-[4.5%] w-[86%]'>
        <Fade direction='up' cascade delay={0.3}>
          <h2 className='font-semibold'>BUSINESS SEGMENTS</h2>

          <div className='flex justify-between items-center my-20'>
            <p className=' text-5xl'>
              OUR <br /> SERVICES
            </p>
            <a href='#'>
              <div className='w-fit flex items-center justify-between text-sm group text-primary'>
                <span className='mr-3 '>READ MORE</span>
                <IoIosArrowForward className='group-hover:translate-x-2 transform transition duration-300 ease-out' />
              </div>
            </a>
          </div>
        </Fade>

        <div className='grid grid-cols-3 gap-20'>
          <Fade cascade direction='up'>
            {stocks.map(data => (
              <div
                key={data.img}
                className='rounded-lg card drop-shadow-md  transition-all duration-300 ease-out hover:scale-105'
              >
                <div className='overflow-hidden'>
                  <img
                    src={data.img}
                    alt='hydraulic tubing'
                    className='object-cover rounded-t-lg '
                  />
                </div>
                <p className='p-7 text-right'>{data.label}</p>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default BusinessSection
