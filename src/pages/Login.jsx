import React from 'react'
import { Link } from 'react-router-dom'
import Footear from '../components/layout/Footear'

const Login = () => {
  return (
    <main className='h-screen w-full flex flex-col justify-between'>
      <section className='w-full p-2 grid items-center sm:grid-cols-2 grid-cols-1 my-auto'>
        <section className='grid grid-rows-[auto_1fr_auto] gap-5'>
          <Link to={'/'} className='text-3xl font-bold text-cyan-500'>Travling!</Link>
          <div className='grid max-w-xs gap-4 mx-auto'>
            <form action="" className='mx-auto max-w-xs p-2 grid justify-center items-center gap-3'>
              <div className='w-full flex justify-between items-center'>
                <h3 className='font-semibold text-xl'>Travel</h3>
                <h4 className='text-cyan-500 font-semibold'>hazlo ahora!</h4>
              </div>
              <div className='w-[100%]'>
                <input className='p-3 rounded-md border w-full' type="text" placeholder='Correo'/>
              </div>
              <div className='w-[100%]'>
                <input className='p-3 rounded-md border w-full' type="password" placeholder='Contraseña'/>
              </div>
              <button className='rounded-md bg-cyan-500 p-3 text-white font-bold'>Login</button>
              <h3 className='text-xs'>No cuentas con una cuenta? <span className='text-cyan-500 font-bold'><Link to={'/signup'}>Registrate ahora!!</Link></span></h3>
            </form>
            <div className='grid grid-cols-3 justify-center items-center gap-2 text-gray-400 text-xs text-center'>
            <hr /><h3>travel page</h3><hr />
            </div>
            <button className='p-3 rounded-md border flex gap-3 justify-center items-center'>
              <div className=''>
                <img src="/images/google.png" alt="" />
              </div>
              <span>Google</span>
            </button>
            <button className='p-3 rounded-md border flex gap-3 justify-center items-center'>
              <div className=''>
                <img src="/images/facebook.png" alt="" />
              </div>
              <span>Facebook</span>
            </button>
          </div>
          {/* <h4 className='text-gray-400 text-xs'>© 2023 Travling!. Reservados todos los derechos</h4> */}
        </section>
        <section className='hidden sm:grid bg-cyan-500 rounded-2xl py-10 px-4 bg relative h-[100%] max-w-md mx-auto w-[100%]'>
          <div className="absolute w-full h-full z-0">
            <img src="/images/decoration.png" alt="" className='object-cover object-right-top pt-5 pr-5 w-full h-full'/>
          </div>
          <div className='w-[100%] border rounded-xl border-white backdrop-blur bg-white/25 z-10 relative'>
            <h2 className='absolute top-4 left-6 text-white font-semibold text-2xl max-w-sm'>Start your journey by one click, explore beautiful world!</h2>
            <div className='w-[310px] absolute bottom-0 right-0'>
              <img src="/images/Traveller 1.png" alt="" className='rounded-md object-cover w-full h-full' />
            </div>
          </div>
        </section>
      </section>
      <div className='bg-cyan-500'>
        <Footear/>
      </div>
    </main>
  )
}

export default Login