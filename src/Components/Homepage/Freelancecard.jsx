import React from 'react'
import { useState } from 'react'

const Freelancecard = ({title}) => {
    const [cls,setcls]=useState('');
    const swipe=()=>{
       setcls('ani');
    }
  return (
    <div className={`w-[96%] h-56 sm:h-80 sm:w-[80%] ${cls} freelancecardbg rounded-xl absolute  cursor-pointer`}>
        <div className='p-2'>
            <div>
        <div className='text-white text-2xl font-bold'>
            {title}
        </div>
        </div>
        <div className='flex text-gray-300 text-sm my-1'>
          <div>E.B: 3K Rs.</div>
          <div>- 3 hours ago</div>
        </div>
        <div className='text-white text-start'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam in reprehenderit libero omnis molestias error autem ipsum, illo obcaecati, odio, enim dolorem consequuntur rerum!
        </div>
        <div className='flex justify-end text-white'>
          <div className='text-3xl px-5 rounded-lg' onClick={swipe}>
             →
          </div>
        </div>
        </div>
    </div>
  )
}

export default Freelancecard