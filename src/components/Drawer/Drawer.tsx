import { IoCloseOutline } from 'react-icons/io5'
import logo from 'assets/global.svg'

interface DrawerProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Drawer ({ isOpen, setIsOpen }: DrawerProps) {
  return (
    <main
      className={
        'fixed overflow-hidden z-10  bg-opacity-25 inset-0 transform ease-in-out lg:hidden' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 translate-x-0  bg-gray-900'
          : ' transition-all delay-300 opacity-0 translate-x-full  ')
      }
    >
      <section
        className={
          ' w-screen max-w-md right-0 absolute rounded-l-lg bg-milk h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <article className='relative w-screen max-w-md pb-10 flex flex-col justify-between space-y-6 overflow-y-auto h-full px-10'>
          {/* Heading */}
          <div>
            <div className='flex items-center justify-between'>
              <h2 className='font-bold text-lg font-Agdasima py-5'>
                Biggest Supply Chain
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className='border border-black/40 rounded-md p-1 hover:scale-105'
              >
                <IoCloseOutline />
              </button>
            </div>

            <hr />
            {/* Links */}
            <ul className='flex flex-col space-y-4 mt-4'>
              <li>
                <a href='#' className='link'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='link'>
                  Products and services
                </a>
              </li>
              <li>
                <a href='#' className='link'>
                  Manufacturing process
                </a>
              </li>
              <li>
                <a href='#' className='link'>
                  Research Development
                </a>
              </li>
              <li>
                <a href='#' className='link'>
                  Case Study
                </a>
              </li>
              <li>
                <a href='#' className='link'>
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Bottom section */}
          <div className=' rounded-md border border-gray-800 grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-3'>
            <div className='flex justify-center'>
              <img src={logo} alt='logo' className='w-[177px]' />
            </div>
            <div className='p-5 sm:p-0 flex flex-col items-center'>
              <p className='mb-4'>Your Reliable Supplier</p>
              <a
                href='https://wa.me/6588105141'
                className=' rounded border border-black/40 py-2 px-6 hover:bg-black/80 hover:text-white transition-all duration-300 ease-out'
              >
                Contact Now
              </a>
            </div>
          </div>
        </article>
      </section>
      <section
        className='w-screen h-full cursor-pointer '
        onClick={() => {
          setIsOpen(false)
        }}
      ></section>
    </main>
  )
}
