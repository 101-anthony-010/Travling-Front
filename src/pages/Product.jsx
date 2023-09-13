import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import date from './../../date.json'

import Menu from '../components/Container/Menu'
import Navbar from '../components/layout/Navbar'
import Footear from '../components/layout/Footear'
import CardProduct from '../components/product/CardProduct'

const Product = () => {
  const [products, setProducts] = useState(date)
  const [filterContinent, setFilterContinent] = useState(date)
  const [pointerCursor, setPointerCursor] = useState()
  const [currentPage, setCurrentPage] = useState()
  

  const handleClickContinents = (region) => {
    setFilterContinent(products.filter(product => product.continent === region))
    setPointerCursor(region)
  }

  const handleChangeSelectContinent = (event) => {
    const country = event.target.value
    handleClickContinents(country)
  }

  const paginationLogic = () => {
    const PRODUCTS_PER_PAGE = 12

    const sliceStart = (currentPage -1) * PRODUCTS_PER_PAGE
    const sliceEnd = sliceStart + PRODUCTS_PER_PAGE
    const productInPage = filterContinent.slice(sliceStart, sliceEnd)
    
    const lastPage = Math.ceil(filterContinent.length / PRODUCTS_PER_PAGE) || 1
  
    const PAGES_PER_BLOCK = 5 
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK)

    const pagesInBlock = []
    const minPage = (actualBlock - 1) * PAGES_PER_BLOCK + 1
    const maxPage = actualBlock * PAGES_PER_BLOCK
    for (let i = minPage; i <= maxPage; i++) {
      if (i <= lastPage) {
        pagesInBlock.push(i)
      }
    }
    return {productInPage, lastPage, pagesInBlock}
  }

  const {lastPage, productInPage, pagesInBlock} = paginationLogic()

  const handleClickPreviusPage = () => {
    const newCurrentPage = currentPage - 1
    if (newCurrentPage >= 1) {
      setCurrentPage(newCurrentPage)
    }
  }
  const handleClickNextPage = () => {
    const newCurrentPage = currentPage + 1
    if (newCurrentPage <= lastPage) {
      setCurrentPage(newCurrentPage)
    }
  }

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/v1/products')
  //     .then(res => setProducts(res.data.productsResolved))
  //     .catch(err => console.error(err))
  // }, [])
  useEffect(() => {
    setCurrentPage(1)
  }, [filterContinent])

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
        <div className='sm:grid grid-cols-5 p-2 hidden gap-1 max-w-4xl mx-auto'>
          <button onClick={() => handleClickContinents('south_america')} className={`${pointerCursor === "south_america" ? 'bg-cyan-500 text-white' : 'bg-white text-black'} hover:bg-cyan-500 hover:text-white font-semibold border border-gray-500 text-center py-3`}>South America</button>
          <button onClick={() => handleClickContinents('north_america')} className={`${pointerCursor === "north_america" ? 'bg-cyan-500 text-white' : 'bg-white text-black'} hover:bg-cyan-500 hover:text-white font-semibold border border-gray-500 text-center py-3`}>North America</button>
          <button onClick={() => handleClickContinents('europe')} className={`${pointerCursor === "europe" ? 'bg-cyan-500 text-white' : 'bg-white text-black'} hover:bg-cyan-500 hover:text-white font-semibold border border-gray-500 text-center py-3`}>Europe</button>
          <button onClick={() => handleClickContinents('africa')} className={`${pointerCursor === "africa" ? 'bg-cyan-500 text-white' : 'bg-white text-black'} hover:bg-cyan-500 hover:text-white font-semibold border border-gray-500 text-center py-3`}>Asia</button>
          <button onClick={() => handleClickContinents('asia')} className={`${pointerCursor === "asia" ? 'bg-cyan-500 text-white' : 'bg-white text-black'} hover:bg-cyan-500 hover:text-white font-semibold border border-gray-500 text-center py-3`}>Africa</button>
        </div>
        <div className='sm:hidden text-white font-semibold flex justify-end p-4'>
          <select className='px-3 bg-orange-400 rounded-md py-2' name="" id="" onChange={handleChangeSelectContinent}>
            <option className='bg-white text-black' value="south_america">South America</option>
            <option className='bg-white text-black' value="north_america">North America</option>
            <option className='bg-white text-black' value="europe">Europe</option>
            <option className='bg-white text-black' value="africa">Africa</option>
            <option className='bg-white text-black' value="asia">Asia</option>
          </select>
        </div>
        <section className='p-2 flex flex-wrap justify-center items-center gap-6'>
          {
            (productInPage || filterContinent)?.map(product => <CardProduct key={product.id} product={product} />)
          }
        </section>
      </section>
      <section>
        <ul className='flex gap-1 justify-center p-4'>
          <li onClick={() => setCurrentPage(1)} className='rounded-sm px-2 py-1 bg-white text-black cursor-pointer border hover:bg-cyan-500 hover:text-white'>{"<<"}</li>
          <li onClick={handleClickPreviusPage} className={`px-2 py-1 bg-white text-black cursor-pointer border rounded-sm hover:bg-cyan-500 hover:text-white`}>{"<"}</li>
          {
            pagesInBlock?.map(numberPage => (<li onClick={() => setCurrentPage(numberPage)} className={`border ${numberPage === currentPage ? 'bg-cyan-500 text-white' : 'bg-white text-black'} hover:bg-cyan-500 hover:text-white rounded-sm px-2 py-1 cursor-pointer`} key={numberPage}>{numberPage}</li>))
          }
          <li onClick={handleClickNextPage} className='rounded-sm px-2 py-1 bg-white text-black cursor-pointer border hover:bg-cyan-500 hover:text-white'>{">"}</li>
          <li onClick={() => setCurrentPage(lastPage)} className='rounded-sm px-2 py-1 bg-white text-black cursor-pointer border hover:bg-cyan-500 hover:text-white'>{">>"}</li>
        </ul>
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