import React from 'react'
import Footer from './Footer'

const Top = () => {
  return (
    <div className='w-full h-full flex gap-8  bg-black'>
        <div className=' relative w-[3vw] left-[37vw] top-[-3.5vw]  h-[3vw] bg-zinc-400 rounded-full'></div>
        <div className=' relative  w-[3vw] left-[37vw] top-[-3.5vw]  h-[3vw] bg-zinc-400 rounded-full'></div>
        <div className=' relative w-[3vw] left-[37vw] top-[-3.5vw]  h-[3vw] bg-zinc-400 rounded-full'></div>
        <div className=' relative w-[3vw] left-[37vw] top-[-3.5vw]  h-[3vw] bg-blue-500 rounded-full'></div>
        <h1 className=' relative w-[7vw] text-[3vh] font-semibold top-[8vw] right-[7vw] text-white '>24,859,684+
LEADS DRIVEN
FOR CLIENTS</h1>
<h1 className='relative w-[10vw] text-[3vh] font-semibold top-[22vw] right-[16vw] text-white '>3,212,407
HOURS OF
EXPERTISE</h1>
        <h1 className='relative w-[10vw] text-[3vh] font-semibold top-[7vw] right-[9vw] text-white'>$6,021,182,299+
REVENUE DRIVEN <br />
FOR CLIENTS
</h1>
<h1 className='relative w-[10vw] text-[3vh] font-semibold top-[21vw] right-[21vw]  text-white border-b-2 '>500
EXPERTS
ON STAFF</h1>

        
     <Footer />    
    </div>
  )
}

export default Top