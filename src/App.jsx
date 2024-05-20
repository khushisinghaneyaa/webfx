
import React from 'react'
import Navbar from './Components/Navbar';
import Business from './Components/Business';
import Forward from './Components/Forward';
import Top from './Components/Top';


const App = () => {
  return (
    <div className='w-full h-screen  font-[Open_Sauce_Sans_Medium] text-black'>
      <Navbar />
      <Business />
      <Forward />
      <Top />
      
    </div>
  )
}

export default App
