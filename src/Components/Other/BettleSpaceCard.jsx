import React from 'react'

const BettleSpaceCard = ({time,p1,p2}) => {
  return (
    <div className='flex justify-center items-center w-[100%] my-3 sm:w-[33%]'>
    <div className='w-[95%] h-20 bettlecardbg rounded-xl m-[40px]'>
      <div className='flex w-[100%] justify-between'>
      <div className='text-xl text-white font-semibold m-3'>
        {time}
      </div>
      {
        time=="LIVE"?
        <button className='m-1 bg-red-700 text-white px-7 rounded-lg font-semibold'>
         Listen
        </button>:
        <></>
      }
      </div>
      <div className='flex justify-center gap-5'>
        <div>
        <img src={p1} className='w-14 h-14 rounded-full' alt="" />
         <div className='text-white'>Mc God</div>
        </div>
        <img src="https://cutewallpaper.org/cdn-cgi/mirage/879d3f56044898301ccabab4a8a90586cd5663eca603a14193df05b49a03034b/1280/24/vs-png/download-hd-vsicon-imovie-vs-final-cut-pro-transparent-png-image--nicepngcom.png" className='h-14' alt="" />
        <div>
        <img src={p2} className='w-14 h-14 rounded-full' alt="" />
        <div className='text-white'>Bhasma</div>
        </div>     
      </div>
    </div>
    </div>
  )
}

export default BettleSpaceCard