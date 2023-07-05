import logo from 'assets/ENCO.svg'


const Navbar = () => {


  return (
      <nav className='absolute z-50 top-0 right-0 left-0 pl-5 pr-10 py-3 bg-white/20 backdrop:blur-lg'>
        <div className='flex justify-between items-center'>
          <img src={logo} alt="company logo" className='w-20'/>

          <section className='flex items-center gap-3 text-white'>
            <p>+65 8810 5141</p>
            <a href="https://wa.me/6588105141" className='inline-block rounded border border-white/40 py-2 px-4'>Contact Me</a>
          </section>
        </div>

        <div className='px-5'>
          <ul className='flex gap-5 text-black font-semi-bold tracking-wide'>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Products and services</a>
            </li>
            <li>
              <a href="#">Manufacturing process</a>
            </li>
            <li>
              <a href="#">Research Development</a>
            </li>
            <li>
              <a href="#">Case Study</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar