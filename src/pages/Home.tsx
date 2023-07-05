import hero_background from 'assets/hero-background.png'

const Home = () => {
  return (
    <div className='bg-milk'>
      <section className='relative rounded-br-lg'>
      <img src={hero_background} alt="hero-background" className='h-100vh w-[95%] object-fit rounded-br-lg'/>
      </section>
    </div>
  )
}

export default Home