import React from 'react'


const Login = () => {


  return (
    <div class="bg-green-400   max-w-screen-2xl px-6  m-auto">
<div class='flex items-center justify-around flex-wrap'>
<div  class='basis-[50%] min-w-[300px]'>
  <img src='/assets/Login-bro.png' alt='' class='max-w-full pt-12 pr-12' />
</div>



<div class='basis-[50%] min-w-[300px] pl-12'>
 <form >
  <h1 class='text-5xl font-bold font-sans text-slate-900 pb-4'>Login</h1>
<label for="email-address" class='text-2xl font-medium font-sans text-slate-900 '>Email</label>
<div className='pt-2 pb-2'>
  <input id="email" name="email" type="text" class='w-full md:w-[26rem] h-10  outline-none pl-3 rounded'/>
</div>
<label for="password" class='text-2xl font-medium font-sans text-slate-900'>Password</label>
<div  className='pt-2'>
  <input id="password" name="password" type="password" class='w-full md:w-[26rem] h-10  outline-none pl-3 rounded'/>
</div>
<div>
  <h3 class='pt-5 text-[darkslategray] text-2xl'>Forgot Password?</h3>
</div>
<div class='mt-6'> 
  <button class='bg-[#001212] w-full md:w-64 h-10 text-neutral-200 rounded'>LOGIN</button></div>






  
 </form>
</div>
</div>


    </div>
  )
}

export default Login
