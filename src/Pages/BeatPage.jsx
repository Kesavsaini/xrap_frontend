import React from 'react'
import Beatsubmissioncard from '../Components/Other/Beatsubmissioncard'

const BeatPage = () => {
  return (
    <>
    <div className='bg-slate-400'>
    <div className='w-[100%] h-80 bg-zinc-600 rounded-tr-full'>

    </div>
    </div>
    <button className='bg-red-700 text-white p-2 rounded-xl text-xl m-3'>
         Submit
    </button>
      <div>
        <Beatsubmissioncard/>
        <Beatsubmissioncard/>
        <Beatsubmissioncard/>
        <Beatsubmissioncard/>
        <Beatsubmissioncard/>
        <Beatsubmissioncard/>
        <Beatsubmissioncard/>
      </div>
    </>
  )
}

export default BeatPage