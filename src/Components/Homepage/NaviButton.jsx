import React from 'react'
const Nbutton=({image})=>{
    return (
        <>
        <div data-tooltip-target="tooltip-right" data-tooltip-placement="right" className='h-16 w-16 rounded-full bg-[rgba(255,255,255,0.5)] m-2 flex items-center justify-center bg-cover cursor-pointer sm:h-20 sm:w-20 z-[9999999999]'>
           <img src={`${image}`} alt="" className='w-[80%] h-[80%] rounded-full'/>
        </div>
        <div id="tooltip-right" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
         Tooltip on right
       <div class="tooltip-arrow" data-popper-arrow></div>
</div>
        </>
    )
}
const NaviButton = () => {
  return (
    <div className='fixed top-36 left-3'>
     <Nbutton image="https://www.pngall.com/wp-content/uploads/6/Rap-PNG.png"/>
     <Nbutton image="https://www.freepnglogos.com/uploads/black-f-logo-6.png"/>
     <Nbutton image="https://www.pngmart.com/files/4/Mic-PNG-Photos.png"/>
    </div>
  )
}

export default NaviButton