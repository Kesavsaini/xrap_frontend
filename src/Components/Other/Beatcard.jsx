import React from 'react'
import MusicPlayer from './MusicPlayer'

const Beatcard = ({coverimg,status,hm}) => {
  return (
    <div className={`flex h-40 sm:${hm?'w-[50%]':'w-[100%]'}`}>
    <div className='w-[45%]  h-[100%] beatcardbg'>
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
          {status}
      </div>
    </div>
    <div className='w-[55%] h-[100%] flex items-center bg-[rgba(0,0,0,1)] border border-spacing-0 border-zinc-900'>
    {/* <audio
        controls
        src="https://audiodemos.github.io/vctk_set0/ground_truth.wav" className='w-52 h-28'/> */}
        <MusicPlayer coverimg={coverimg}/>
    </div>
    </div>
  )
}

export default Beatcard