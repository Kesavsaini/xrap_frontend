import React from 'react'
import Beatsubmissioncard from '../Components/Other/Beatsubmissioncard'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MusicPlayer from '../Components/Other/MusicPlayer';

const BeatPage = ({status}) => {
  return (
    <>
    <div className='sticky top-0'>
    <div className=''>
    <div className='w-[100%] h-80 headbg rounded-tr-full rounded-bl-full'>
       <MusicPlayer coverimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0mPzxCzKuOD4Ze5gg-rOsm9S9u_V0J1c5DM4xlL_T1kcryj7p_1d-XSiMSGhcwQ1HXM&usqp=CAU" h={true}/>
    </div>
    </div>
    <div className='w-[100%] flex m-1 '>
      <div className='w-[53%] flex flex-col justify-between'>
    <button className='  text-white  p-4 text-2xl font-bold shadow-md shadow-red-800  w-[100%]   rounded-xl'>
    <ArrowUpwardIcon/>   Submit
    </button>
    <button className='  text-white p-4   text-2xl font-bold shadow-md shadow-red-800  w-[100%]  rounded-xl'>
        <ArrowDownwardIcon/>  Download 
    </button>
    </div>
    <div className='w-[43%]  text-white mx-3  rounded-xl shadow-md shadow-red-800'>
    <div className='w-[100%]  h-[100%]'>
     <div className='flex items-center'>
    <div className=' w-14 h-14 rounded-full'>
               <img src="https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg" className='rounded-full' alt="" />
      </div>
      <div>
        <div className='font-semibold text-white m-1'>
          Sez 
        </div>
      </div>
      </div>
      <div className='text-white text-lg font-bold'>
        Xop sm type Beat
      </div>
      <div className='text-gray-500'>
        Submissions:4.7K
      </div>
      <div className='text-gray-500'>
        Beat:Drill
      </div>
        <div className={`${status=='OPEN'?'text-green-600':'text-red-600'}  bg-black w-14 rounded-r-lg flex items-center justify-center px-3`}>
          open
      </div>
    </div>
    </div>
    </div>
    </div>
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