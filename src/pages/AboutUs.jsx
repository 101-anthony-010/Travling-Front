import React from 'react'
import { Link } from 'react-router-dom'

import Menu from '../components/Container/Menu'
import Navbar from '../components/layout/Navbar'
import Footear from '../components/layout/Footear'

const AboutUs = () => {
  return (
    <main className=''>
      <Menu/>
      <section className="bg-no-repeat bg-cover bg-center p-2 text-white bg-[url('/images/about.png')] flex flex-col justify-center items-stretch">
        <div className='max-w-4xl w-full mx-auto'>
          <Navbar/>
        </div>
        <section className='py-8 flex flex-wrap items-center justify-center m-2 h-[200px] sm:h-[400px]'>
          <div className='max-w-xs flex flex-col gap-3'>
            <h2 className='font-bold text-4xl'>About us</h2>
          </div>
        </section>
      </section>
      
      <section className='flex sm:flex-row flex-col gap-6 m-2 justify-center items-center my-10'>
        <div className='max-w-xs'>
          <h4 className="text-xl bg-[url('/images/point.png')] p-4 bg-cover bg-center bg-no-repeat">Hey, We are the Red Explorers Brief History <span className='text-orange-400 font-bold underline'>About Us.</span></h4>
        </div>
        <p className='max-w-md text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis. Eleifend enim, praesent eu, leo semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus morbi volutpat ante. Adipiscing mauris</p>
      </section>

      <section className='m-2 grid gap-6 my-10'>
        <div className='mx-auto'>
          <img src="/images/aboutUs-img.png" alt="" />
        </div>
        <p className='text-sm max-w-3xl mx-auto'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus. Nisl quam massa sapien tempor semper. Hac tempus pellentesque nibh duis ultrices. Senectus sagittis id ullamcorper mi eget pellentesque egestas. In ut sollicitudin ut orci volutpat egestas fermentum. Sit turpis diam risus leo bibendum neque, quis in vitae. Praesent enim augue tellus vitae placerat purus pretium at massa. Aliquet a malesuada eget posuere. Pellentesque euismod nulla praesent rhoncus.
        </p>
      </section>

      <section className='grid sm:grid-cols-2 grid-cols-1 justify-center m-2 gap-6 max-w-5xl p-2 mx-auto text-sm'>
        <div className='max-w-md flex flex-col gap-3 mx-auto'>
          <h2 className='font-semibold text-3xl'>Our Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero.</p>
        </div>
        <div className='max-w-md flex flex-col gap-3 mx-auto'>
          <h2 className='font-semibold text-3xl'>Who Are Red Explorers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero.</p>
        </div>
        <div className='max-w-md flex flex-col gap-3 mx-auto'>
          <h2 className='font-semibold text-3xl'>About Our Cameraman</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus.</p>
        </div>
        <div className='max-w-md flex flex-col gap-3 mx-auto'>
          <h2 className='font-semibold text-3xl'>What you’ll Learn Here</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
          <h3>On Our Website You’ll find:</h3>
          <ul className='list-disc list-inside'>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
          </ul>
        </div>
      </section>

      <section>

      </section>

      <section className='flex sm:flex-row flex-col gap-6 m-2 justify-center items-center my-10'>
        <div className='max-w-xs'>
          <h4 className="text-3xl bg-[url('/images/point.png')] p-4 bg-cover bg-center bg-no-repeat">What <span className='text-orange-400 underline'>Customer says </span><span className='underline'>About us?</span></h4>
        </div>
        <p className='max-w-md text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis. Eleifend enim, praesent eu, leo semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus morbi volutpat ante. Adipiscing mauris</p>
      </section>

      <section className='flex-wrap flex justify-center items-center my-10'>
        <article className='w-[240px] grid gap-2 rounded-2xl shadow-2xl p-8 m-8'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.</p>
          <h3 className='font-semibold text-lg'>Joy Kim</h3>
          <span className='text-sm font-semibold'>explorer</span>
        </article>
        <article className='w-[240px] grid gap-2 rounded-2xl shadow-2xl p-8 m-8'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.</p>
          <h3 className='font-semibold text-lg'>Joy Kim</h3>
          <span className='text-sm font-semibold'>explorer</span>
        </article>
        <article className='w-[240px] grid gap-2 rounded-2xl shadow-2xl p-8 m-8'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.</p>
          <h3 className='font-semibold text-lg'>Joy Kim</h3>
          <span className='text-sm font-semibold'>explorer</span>
        </article>
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

export default AboutUs