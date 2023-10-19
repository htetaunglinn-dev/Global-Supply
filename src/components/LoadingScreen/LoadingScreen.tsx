import './LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <div className='loading__screen fixed z-50'>
      <div className='content'>
        <div className='bars'>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <div className='bars'>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
