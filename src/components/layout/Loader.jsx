import React from 'react'

const Loader = () => {
  return (
    <section className='z-50 w-[100%] h-[100%] absolute flex justify-center items-center bg-black/10'>
      <div className='lds-dual-ring'></div>
    </section>
  )
}

export default Loader