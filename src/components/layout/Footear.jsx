import React from 'react'

const Footear = () => {
  return (
    <section className='flex p-4 justify-between items-center bg-transparent text-white'>
      <h5 className='text-sm'>© 2023 Travling!</h5>
      <div className='flex gap-2 text-2xl'>
        <i className='hover:bg-white hover:text-cyan-500 border rounded-full p-1 cursor-pointer hover:animate-bounce bx bxl-instagram'></i>
        <i className='hover:bg-white hover:text-cyan-500 border rounded-full p-1 cursor-pointer hover:animate-bounce bx bxl-facebook' ></i>
        <i className='hover:bg-white hover:text-cyan-500 border rounded-full p-1 cursor-pointer hover:animate-bounce bx bxl-twitter' ></i>
      </div>
    </section>
  )
}

export default Footear