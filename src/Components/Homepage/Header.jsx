import React from 'react'

const Header = () => {
  return (
    <div className='h-96 sm:h-[100vh] w-[100vw] text-white bg-hero bg-cover sm:bg-auto bg-center'>
      <div className='h-[100%] w-[100%] bg-[rgba(0,0,0,0.9)]'>
        <div className='flex justify-end w-[100vw]'>
           <div className='bg-slate-50 w-16 h-16 rounded-full m-5'>
               <img src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg" className='rounded-full' alt="" />
           </div>
        </div>
        <div className='sm:m-20'>
        <div>
            <div className='m-5'>
            <div className='text-5xl sm:text-9xl font-bold'>YOUR ONLY</div>
            <div className='text-5xl sm:text-9xl font-bold'>HIPHOP HOME</div>
            <div className='sm:text-4xl'>You can compete/create beat competition and can compete in Rap battle and can get freelance work</div>
           </div>
        </div>
        <div className='flex m-3 -my-3 sm:m-5 sm:my-3'>
            <button className='rounded-lg  bg-white text-black mx-2 p-2 sm:p-3 sm:text-3xl'>Get Started</button>
            <button className='rounded-lg bg-white text-black mx-2 p-2 sm:p-3 sm:text-3xl'>Learn how it works</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Header