import logo from 'assets/logo.png'


const Navbar = () => {


  return (
      <nav className='bg-primary/90 px-5 py-3'>
        <div className='flex justify-between items-center'>
          <img src={logo} alt="company logo" className='w-20'/>

          <section className='flex items-center gap-3 text-white'>
            <p>+65 8810 5141</p>
            <a href="https://wa.me/6588105141" className='inline-block rounded border border-white/40 py-2 px-4'>Contact Me</a>
          </section>
        </div>

        <div>
          <ul className='flex gap-5 text-white'>
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