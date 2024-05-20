import React from 'react'
import Circle from './Circle'

const Forward = () => {
  return (
    <div className='w-full h-full'>
        <div className='max-w-screen-2xl pb-[10vw] pt-[4vw] px-4  py-2 ml-6 mr-6 mt-[6vw] mb-[10vw] border-solid rounded pb-4 bg-sky-100'>
            <img className='size-[25vw] pb-[-5vw] ml-7 mt-9' src="https://www.webfx.com/wp-content/uploads/2022/10/1-photo-9.png" alt="" />
        </div>
        <Circle />
    </div>
  )
}

export default Forward