import React from 'react'
import NaviButton from './Components/Homepage/NaviButton';
import Beactcom from './Pages/Beactcom';
import BettleSpace from './Pages/BettleSpace';
import Freelance from './Pages/Freelance';
import Homepage from './Pages/Homepage';
export const App = () => {
  return (
    <div className='bg-black w-[100%] overflow-hidden'>
      {/* <Homepage/> */}
      {/* <Beactcom/> */}
      {/* <BettleSpace/> */}
      <Freelance/>
      <NaviButton/>
    </div>
    
  )
}


export default App;
