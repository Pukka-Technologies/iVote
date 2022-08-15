import React from 'react'

function UEvent({data}) {
  return (
 
         <div className='border-[1px]  w-[90%] flex flex-col  m-auto rounded-t-[100px] '>
       
        <img src={data.url} alt={data.it} className='rounded-t-[30px] '  />
        <div className='flex gap-x-4 py-4 items-center'>
            <div className='pl-2'>
                <h2 className='text-[17px]' >{data.month}</h2>
                <h1 className='text-xl font-bold'>{data.date}</h1>
                </div>
            <div className=''>
                <h1 className='font-bold'>{data.header}</h1>
                <h2 className=''>{data.text}</h2>
                </div>
        </div>
        
    </div>
   
   
  )
}

export default UEvent