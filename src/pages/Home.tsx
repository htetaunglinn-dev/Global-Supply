import hero_background from 'assets/background.png'

const Home = () => {
  return (
    <div className='bg-primary'>
      <section className='relative '>
      <img src={hero_background} alt="hero-background" className='h-100vh w-[90%]'/>
      </section>
    </div>
  )
}

export default Home