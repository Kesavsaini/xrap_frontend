import React from 'react'
import NaviButton from './Components/Homepage/NaviButton';
import Beactcom from './Pages/Beactcom';
import BeatPage from './Pages/BeatPage';
import BettleSpace from './Pages/BettleSpace';
import Homepage from './Pages/Homepage';
export const App = () => {
  return (
    <div className='bg-black w-[100%] overflow-hidden'>
      {/* <Homepage/> */}
      {/* <Beactcom/>  */}
      {/* <BettleSpace/> */}
      <BeatPage/>
      <NaviButton/>
    </div>
    
  )
}


export default App;
