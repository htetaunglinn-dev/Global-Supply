export const VideoPlayer = () => {
  return (
    <div>
      <video autoPlay muted loop width='370' className='rounded-lg'>
        <source
          src='https://res.cloudinary.com/dqu7jnyue/video/upload/v1688565616/ENCO/pexels-tima-miroshnichenko-5846662_1080p_hvthoo.mp4'
          type='video/webm'
        />
      </video>
    </div>
  )
}
