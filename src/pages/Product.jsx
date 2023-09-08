import React from 'react'
import { Link } from 'react-router-dom'

import Menu from '../components/Container/Menu'
import Navbar from '../components/layout/Navbar'
import Footear from '../components/layout/Footear'
import CardProduct from '../components/product/CardProduct'

const Product = () => {
  return (
    <main className=''>
      <Menu/>
      <section className="bg-no-repeat bg-cover bg-center p-2 text-white bg-[url('/images/Contact.png')] flex flex-col justify-center items-stretch">
        <div className='max-w-4xl w-full mx-auto'>
          <Navbar/>
        </div>
        <section className='py-8 flex flex-wrap items-center justify-center m-2 h-[150px] sm:h-[300px]'>
          <div className='max-w-xs flex flex-col gap-3'>
            <h2 className='font-bold text-4xl'>Product</h2>
          </div>
        </section>
      </section>
      
      <section className='flex sm:flex-row flex-col gap-6 m-2 justify-center items-center my-10'>
        <div className='max-w-xs'>
          <h4 className="text-2xl bg-[url('/images/point.png')] p-4 bg-cover bg-center bg-no-repeat"><span className='text-orange-400 font-bold underline'>Where do</span> you want to go?</h4>
        </div>
        <p className='max-w-sm text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.</p>
      </section>

      <section className='p-2 my-10'>
        <div className='sm:grid grid-cols-5 p-2 hidden gap-1'>
          <h4 className='hover:bg-cyan-500 hover:text-white font-semibold border border-gray-500 text-center py-3'>South America</h4>
          <h4 className='hover:bg-cyan-500 hover:text-white font-semibold border border-gray-500 text-center py-3'>North America</h4>
          <h4 className='hover:bg-cyan-500 hover:text-white font-semibold border border-gray-500 text-center py-3'>Europe</h4>
          <h4 className='hover:bg-cyan-500 hover:text-white font-semibold border border-gray-500 text-center py-3'>Africa</h4>
          <h4 className='hover:bg-cyan-500 hover:text-white font-semibold border border-gray-500 text-center py-3'>Asia</h4>
        </div>
        <div className='sm:hidden text-white font-semibold flex justify-end p-4'>
          <select className='px-3 bg-orange-400 rounded-md py-2' name="" id="">
            <option className='bg-white text-black' value="">South America</option>
            <option className='bg-white text-black' value="">North America</option>
            <option className='bg-white text-black' value="">Europe</option>
            <option className='bg-white text-black' value="">Africa</option>
            <option className='bg-white text-black' value="">Asia</option>
          </select>
        </div>
        <section className='p-2'>
          <CardProduct/>
        </section>
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

export default Product