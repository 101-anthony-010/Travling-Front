import React from 'react'
import { Link } from 'react-router-dom'

import Menu from '../components/Container/Menu'
import Navbar from '../components/layout/Navbar'
import Footear from '../components/layout/Footear'
import LoginSection from '../components/Container/LoginSection'

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
        <LoginSection/>
        <hr/>
        <Footear/>
      </section>
    </main>
  )
}

export default ContactUs