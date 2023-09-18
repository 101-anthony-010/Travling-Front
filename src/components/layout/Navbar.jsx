import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeIsShowMenu } from '../../store/slices/menu.slice'

const Navbar = () => {
  const dispatch = useDispatch()
  const { token } = useSelector( store => store.loginUserSlice)


  const handleClickChangeOpen = () => {
    dispatch(changeIsShowMenu())
  }

  return (
    <>
      <section className='hidden sm:flex sm:justify-between sm:items-center py-1 max-w-5xl'>
        <div>
          <Link to={'/'} className='text-cyan-500 text-3xl font-bold'>Travling!</Link>
        </div>
        <div className='flex gap-6 text-sm'>
          <Link to={'/product'}>Product</Link>
          <Link to={'/aboutUs'}>About Us</Link>
          <Link to={'/contactUs'}>Contact Us</Link>
        </div>
        {
          token ? (
            <section>
              <div className='cursor-pointer w-[40px] h-[40px] m-2'>
                <img src="/images/beach.jpg" className='rounded-full object-cover w-full h-full' alt="" />
              </div>
            </section>
          ) : (
            <Link className='flex gap-2 font-semibold text-white rounded-md bg-orange-400 px-5 cursor-pointer py-1.5' to={'/login'}>Login</Link>
          )
        }
      </section>
      <div className='sm:hidden text-right text-2xl cursor-pointer'>
        <i onClick={handleClickChangeOpen} className='bx bx-menu' ></i>
      </div>
    </>
  )
}

export default Navbar