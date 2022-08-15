import React from 'react'
import EventNav from './EventNav'


const Event = () => {
  return (
    <div>
       <div className="bg-event-img   bg-no-repeat bg-center bg-cover relative z-20  ">
  <div className="bg-slate-500  opacity-70 absolute  h-full w-full"></div>

  <div className='z-30 relative'>
  <EventNav className='z-[100] relative'/>
    <div className='flex items-center justify-around flex-wrap px-[30px] mt-9'>
<div className='basis-2/4 min-w-[300px]'>
  <img src='/assets/event-image.png' alt='event' className='max-w-full pt-[50px] pr-[50px] pb-0 pl-0 rounded'/>
</div>
<div className='basis-2/4 min-w-[300px] text-[#001212]'>
<h2 className='text-2xl uppercase font-bold my-2 ' >We provide different packages of events for you</h2>
<p className='mb-2 text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
     reprehenderit recusandae deleniti numquam sunt beatae harum magnam
     debitis maxime excepturi tempora rerum temporibus officiis repudiandae
     neque similique nostrum, odit, est officia eius eum dolore? Laboriosam
</p>
<div className='flex items-center justify-center gap-x-3 mb-4'>
<button className=' text-[#001212] font-medium py-2 w-40 bg-emerald-200  border-solid border-[1px] border-emerald-200 '>Get Started</button>
<button className='  text-[#001212] font-medium py-2 w-40 bg-transparent border-solid border-[1px] border-emerald-200'>Learn More</button>
</div>

</div>
    </div>
  </div>

 </div>
    </div>




 

  )
}





export default Event