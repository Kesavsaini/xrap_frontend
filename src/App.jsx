import React from 'react'
import NaviButton from './Components/Homepage/NaviButton';
import Homepage from './Pages/Homepage';
export const App = () => {
  return (
    <div className='bg-black w-[100%] overflow-hidden'>
      <Homepage/>
      <NaviButton/>
    </div>
    
  )
}


export default App;
