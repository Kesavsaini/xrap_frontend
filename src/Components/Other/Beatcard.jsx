import React from 'react'
import MusicPlayer from './MusicPlayer'

const Beatcard = ({coverimg}) => {
  return (
    <div className='flex h-40'>
    <div className='w-[45%] h-[100%] bg-red-600 flex'>
    <div className='bg-slate-50 w-14 h-14 rounded-full m-1'>
               <img src="https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg" className='rounded-full' alt="" />
      </div>
    </div>
    <div className='w-[55%] h-[100%] flex items-end'>
    {/* <audio
        controls
        src="https://audiodemos.github.io/vctk_set0/ground_truth.wav" className='w-52 h-28'/> */}
        <MusicPlayer coverimg={coverimg}/>
    </div>
    </div>
  )
}

export default Beatcard