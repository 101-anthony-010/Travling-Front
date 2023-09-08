import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import CardDestination from '../home/CardDestination'
import Footear from '../components/layout/Footear'
import Menu from '../components/Container/Menu'

const dates = [
  {
    id: 1,
    title: "Flores Road Trip 3D2N",
    pais: "peru",
    ciudad: "Manggarai Barat",
    dias: 3,
    precio: 250,
    image: "/images/img (2).png"
  },
  {
    id: 2,
    title: "Forrester Glamping Co Bogor",
    pais: "peru",
    ciudad: "Bogor",
    dias: 14,
    precio: 250,
    image: "/images/img (1).png"
  },
  {
    id: 3,
    title: "Paket Tiket Pesawat Jakarta Bali",
    pais: "peru",
    ciudad: "Jakarta",
    dias: 7,
    precio: 250,
    image: "/images/img (4).png"
  },
  {
    id: 4,
    title: "Desa Wisata Kandri",
    pais: "peru",
    ciudad: "Kota Semarang",
    dias: 5,
    precio: 250,
    image: "/images/img (3).png"
  },
]

const Home = () => {
  return (
    <main className=''>
      <Menu/>
      <section className='p-2 bg-gradient-to-b from-blue-100 to-white grid gap-2 justify-center'>
        <Navbar/>
        <section className='py-8 flex flex-wrap items-center justify-center m-2'>
          <div className='max-w-xs flex flex-col gap-3'>
            <h2 className='font-bold text-4xl'>Start your journey by one click, explore beautiful world!</h2>
            <p className=''>Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us!</p>
          </div>
          <div className='max-w-md'>
            <img src="/images/illus.png" alt="" className='object-contain w-full h-full'/>
          </div>
        </section>
      </section>
      <section className='px-2 py-8 grid'>
        <div className='text-center flex flex-col gap-2 my-8'>
          <h3 className='font-semibold text-2xl'>Popular Destinations</h3>
          <p className='text-sm'>Vacations to make your experience enjoyable in Indonesia!</p>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-6'>
          {
            dates.map((date) => (
              <CardDestination key={date.id} date={date}/>
            ))
          }
        </div>
      </section>
      <section className='flex justify-center items-center gap-6 flex-wrap-reverse p-2 py-8 my-6'>
        <div className='max-w-sm'>
          <img src="/images/chooseUs.png" alt="" />
        </div>
        <div className='max-w-sm'>
          <h2 className='font-semibold text-2xl'>Why Choose Us</h2>
          <p>Enjoy different experiences in every place you visit and discover new and affordable adventures of course.</p>
          <div className='grid gap-3'>
            <div className='hover:cursor-pointer hover:shadow-xl rounded-md p-2 hover:p-3 transition-all duration-300 grid grid-cols-[auto_1fr] gap-2 justify-center items-center'>
              <div>
                <img src="/images/flight.png" alt="" />
              </div>
              <div>
                <h4 className='font-semibold text-lg'>Flight Ticket</h4>
                <h5 className='text-gray-500 text-xs'>Vitae donec pellentesque a aliquam et ultricies auctor.</h5>
              </div>
            </div>
            <div className='hover:cursor-pointer hover:shadow-xl rounded-md p-2 hover:p-3 transition-all duration-300 grid grid-cols-[auto_1fr] gap-2 justify-center items-center'>
              <div>
                <img src="/images/Group.png" alt="" />
              </div>
              <div>
                <h4 className='font-semibold text-lg'>Accomodation</h4>
                <h5 className='text-gray-500 text-xs'>Vitae donec pellentesque a aliquam et ultricies auctor.</h5>
              </div>
            </div>
            <div className='hover:cursor-pointer hover:shadow-xl rounded-md p-2 hover:p-3 transition-all duration-300 grid grid-cols-[auto_1fr] gap-2 justify-center items-center'>
              <div>
                <img src="/images/hotel.png" alt="" />
              </div>
              <div>
                <h4 className='font-semibold text-lg'>Packaged Tour</h4>
                <h5 className='text-gray-500 text-xs'>Vitae donec pellentesque a aliquam et ultricies auctor.</h5>
              </div>
            </div>
            <Link><span className='grid grid-cols-[auto_1fr] gap-2 font-semibold items-center hover:text-cyan-500'>Another Product<i className='bx bx-chevron-right'></i></span></Link>
          </div>
        </div>
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

export default Home