import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const LoginSection = () => {
  const { token } = useSelector( store => store.loginUserSlice)

  return (
    <section className={`mb-5 ${token ? "hidden": "block"} bg-white/20 backdrop-blur grid sm:grid-cols-[auto_1fr] grid-cols-1 gap-4 justify-center items-center max-w-xl mx-auto border rounded-md border-white p-4`}>
      <h3 className='max-w-xs text-white mx-auto text-center'>Prepare yourself to be part of exploration of <span className='font-bold text-xl'>The Beauty of Indonesia</span></h3>
      <div className='grid gap-4 sm:grid-cols-1 grid-cols-2 text-center'>
        <Link className='font-semibold py-2 text-white rounded-md bg-cyan-500' to={'/login'}><button className=''>Sign In</button></Link>
        <Link className='font-semibold py-2 text-cyan-500 rounded-md bg-white' to={'/signup'}><button >Sign Up</button></Link>
      </div>
    </section>
  )
}

export default LoginSection