import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsShowMenu } from '../../store/slices/menu.slice'
import { Link } from 'react-router-dom'

const Menu = () => {
  const dispatch = useDispatch()
  const { isShowMenu } = useSelector( store => store.menuSlice )

  const handleClickChangeClose = () => {
    dispatch(changeIsShowMenu())
  }
  return (
    <section className={`fixed w-full z-20 ${isShowMenu ? "left-0" : "left-[200%]"} transition-all duration-500`}>
      <div onClick={handleClickChangeClose} className='absolute w-[100%] h-screen bg-black/10 backdrop-blur-sm'></div>
      <div className='bg-white absolute top-0 right-0 w-[280px] h-[380px] rounded-lg m-3 p-4 flex flex-col gap-5 items-center justify-center font-semibold'>
        <i onClick={handleClickChangeClose} className='absolute right-0 top-0 p-2 hover:cursor-pointer hover:text-red-500 text-xl bx bx-x'></i>
        <Link to={'/'} className='hover:cursor-pointer hover:shadow-md px-6 py-2 w-[140px] text-center rounded-md text-cyan-500 text-2xl'>Travling!</Link>
        <Link to={'/product'} className='hover:cursor-pointer hover:shadow-md px-6 py-2 w-[140px] text-center rounded-md'>Product</Link>
        <Link to={'/aboutUs'} className='hover:cursor-pointer hover:shadow-md px-6 py-2 w-[140px] text-center rounded-md'>About Us</Link>
        <Link to={'/contactUs'} className='hover:cursor-pointer hover:shadow-md px-6 py-2 w-[140px] text-center rounded-md'>Contact Us</Link>
        <Link to={'/login'} className='bg-orange-400 font-bold rounded-md text-white py-2 px-8'>Login</Link>
      </div>
    </section>
  )
}

export default Menu