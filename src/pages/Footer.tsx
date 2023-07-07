import logo from 'assets/ENCO.svg'
import { ImLinkedin } from 'react-icons/im'
import { FaSquareTwitter, FaSquareWhatsapp } from 'react-icons/fa6'
import { FaFacebookSquare } from 'react-icons/fa'
import { Fade, Slide } from 'react-awesome-reveal'

const Footer = () => {
  return (
    <div className=' w-full py-32 bg-milk overflow-hidden'>
      <div className='ml-[9.5%] w-[82%] '>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {/* Logo */}

          <div className='flex justify-center items-center'>
            <Slide direction='left'>
              <img src={logo} alt='logo' className='w-36' />
            </Slide>
          </div>

          {/* Navlinks */}
          <div>
            <Fade direction='up'>
              <ul className='flex flex-col space-y-4 mt-10'>
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
            </Fade>
          </div>

          {/* Contacts */}
          <div className='mt-10'>
            <Fade direction='up'>
              <a href='https://wa.me/6588105141' className='text-2xl'>
                +65 8810 5141
              </a>
            </Fade>

            <div className='text-sm my-5'>
              <Fade delay={0.3} direction='up' cascade>
                <p>lavender street</p>
                <p>Singapore</p>
                <p>DWTX GPR</p>
              </Fade>
            </div>

            <div className='flex gap-3'>
              <Fade delay={0.5} direction='up'>
                <a href='#'>
                  <FaFacebookSquare />
                </a>
                <a href='#'>
                  <FaSquareWhatsapp />
                </a>
                <a href='#'>
                  <FaSquareTwitter />
                </a>
                <a href='#'>
                  <ImLinkedin />
                </a>
              </Fade>
            </div>
          </div>
        </section>
        <hr className='my-5' />
        <section>
          <div className='flex flex-wrap gap-3'>
            <Fade direction='up' cascade>
              <a href='#' className='link'>
                Contact US
              </a>
              <a href='#' className='link'>
                Term of use
              </a>
              <a href='#' className='link'>
                Privacy Cookie
              </a>
              <a href='#' className='link'>
                Policy
              </a>
            </Fade>
          </div>
          <div className='text-sm opacity-60 mt-3'>
            <Fade direction='up' delay={1} duration={2000}>
              &copy; 2023 - All rights reserved. Powered by Dev Genius
            </Fade>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Footer
