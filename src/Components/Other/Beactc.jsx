import React from 'react'
import Beatcard from './Beatcard'

const Beactc = ({coverimg,status}) => {
  return (
   <>
    <div className='p-2 bg-zinc-800 rounded-xl m-1 sm:w-[48%] sm:m-2'>
    <Beatcard coverimg={coverimg} status={status}/>
    </div>
   </> 
  )
}

export default Beactc