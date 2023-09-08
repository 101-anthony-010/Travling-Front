import React from 'react'

const CardDestination = ({date}) => {
  return (
    <article className='p-2 rounded-md bg-gray-100/75 grid gap-2 h-[280px]'>
      <div className='w-[180px] h-[120px]'>
        <img src={date.image} alt="" className='rounded-md w-full h-full object-none' />
      </div>
      <h5 className='text-xs text-gray-400'><i className='text-purple-500 animate-bounce bx bxs-map pr-1'></i>{date.ciudad}</h5>
      <h2 className='font-semibold w-[180px]'>{date.title}</h2>
      <h4 className='font-light'>{date.dias} Days</h4>
      <h3 className='text-sm font-semibold text-purple-400'>${date.precio} <span className='font-normal'>/persona</span></h3>
    </article>
  )
}

export default CardDestination