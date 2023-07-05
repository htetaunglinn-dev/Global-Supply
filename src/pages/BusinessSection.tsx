import { IoIosArrowForward } from 'react-icons/io'
import { stocks } from 'utils/stocks'

const BusinessSection = () => {
  return (
    <section className='w-full bg-white py-32 flex justify-center'>
      <div className='ml-[4.5%] w-[86%]'>
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

        <div className='grid grid-cols-3 gap-20'>
          {stocks.map(data => (
            <div className='rounded-lg card drop-shadow-md'>
              <img
                src={data.img}
                alt='hydraulic tubing'
                className='object-cover rounded-t-lg'
              />
              <p className='p-7 text-right'>{data.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessSection
