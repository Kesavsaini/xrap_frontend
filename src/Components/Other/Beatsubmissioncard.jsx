import React, { useState } from 'react'

const Beatsubmissioncard = () => {
    const [count,setcount]=useState(0);
    const vote=(str)=>{
        if(str==="upvote") setcount(count+1);
        else setcount(count-1);
    }
  return (
    <div className='text-white w-[90%] h-24 m-5 flex bg-zinc-800 rounded-2xl p-1'>
        <div className='w-[20%] bg-red-700 rounded-2xl'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQ_chfm8qEcDblEbLBAb2-N3lJIFMR6r_XxczZ_Nth_aVknF-QjR-4pT0HpWIEhZ6ETg&usqp=CAU" alt="" className='w-[100%] h-[100%] bg-cover rounded-2xl'/>
        </div>
        <div className='w-[70%] p-1'>
        <div className='text-xl font-semibold'>
          Beater
        </div>
        <div>
       <audio controls id="beep" className='w-[100%] rounded-none'>
              
        <source src="https://soundcloud.com/crownruler/crown-ruler-mix-23-lorem-ipsum" type="audio/mp3" />
           Your browser does not support the audio tag.
      </audio>
      </div>
      </div>
      <div className='h-[100%] justify-center items-center'>
         <img src="https://static.thenounproject.com/png/136236-200.png" alt="" className='h-[40%] w-8  rounded-full' onClick={()=>vote("upvote")}/>
         <div className=' flex justify-center items-center'>{count}</div>
         <img src="https://static.thenounproject.com/png/136236-200.png" alt="" className='h-[40%] w-8 rotate-180 rounded-full' onClick={()=>vote("downvote")}/>
      </div>
    </div>
  )
}

export default Beatsubmissioncard