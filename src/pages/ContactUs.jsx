import React from 'react'
import { Link } from 'react-router-dom'

import Menu from '../components/Container/Menu'
import Navbar from '../components/layout/Navbar'
import Footear from '../components/layout/Footear'

const ContactUs = () => {
  return (
    <main className=''>
      <Menu/>
      <section className="bg-no-repeat bg-cover bg-center p-2 text-white bg-[url('/images/Contact.png')] flex flex-col justify-center items-stretch">
        <div className='max-w-4xl w-full mx-auto'>
          <Navbar/>
        </div>
        <section className='py-8 flex flex-wrap items-center justify-center m-2 h-[100px] sm:h-[200px]'>
          <div className='max-w-xs flex flex-col gap-3'>
            <h2 className='font-bold text-4xl'>Contact us</h2>
          </div>
        </section>
      </section>
      
      <section className='grid justify-center items-center gap-4 my-10'>
        <h2>PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM</h2>
        <form className='mx-auto grid gap-3' action="">
          <div className='grid grid-cols-2 gap-3'>
            <input className='border-gray-300 rounded-md border py-2 px-6 text-sm' placeholder='First Name' type="text" />
            <input className='border-gray-300 rounded-md border py-2 px-6 text-sm' placeholder='Last Name' type="text" />
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <input className='border-gray-300 rounded-md border py-2 px-6 text-sm' placeholder='Email' type="text" />
            <input className='border-gray-300 rounded-md border py-2 px-6 text-sm' placeholder='Subject' type="text" />
          </div>
          <textarea className='border-gray-300 rounded-md border py-2 px-6 text-sm' placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
          <button className='text-white font-semibold bg-cyan-500 hover:bg-cyan-600 rounded-md py-3 text-lg'>Submit</button>
        </form>
      </section>

      <section className='bg-cyan-500 relative rounded-t-xl pt-8'>
        <section className='mb-5 bg-white/20 backdrop-blur grid sm:grid-cols-[auto_1fr] grid-cols-1 gap-4 justify-center items-center max-w-xl mx-auto border rounded-md border-white p-4'>
          <h3 className='max-w-xs text-white mx-auto text-center'>Prepare yourself to be part of exploration of <span className='font-bold text-xl'>The Beauty of Indonesia</span></h3>
          <div className='grid gap-4 sm:grid-cols-1 grid-cols-2 text-center'>
            <Link className='font-semibold py-2 text-white rounded-md bg-cyan-500' to={'/login'}><button className=''>Sign In</button></Link>
            <Link className='font-semibold py-2 text-cyan-500 rounded-md bg-white' to={'/signup'}><button >Sign Up</button></Link>
          </div>
        </section>
        <hr/>
        <Footear/>
      </section>
    </main>
  )
}

export default ContactUs