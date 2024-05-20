import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl max-auto py-6 bg-zinc-100 justify-between border-b-2 border-zinc-200'>
       
       <div className='nleft'>
       <img className=' relative ml-[15vh] top-[7vh] ' src="https://www.webfx.com/wp-content/uploads/2023/05/webfx-logo.svg" alt="" />
        <div className='links flex gap-10 ml-[45vh] font-semibold font-serif text-3xl'>
            {["SEO & Lead  Generation", "Revenue Marketing & CRO", "UX & Interative", "Technology", "Who We Are"].map((elem,index) => <a className='text-sm font-regular items-center gap-1' href='#'>
                 <span style={{boxShadow: "0 0 0.25em #00FF19"}} className=''> <br /> </span>
                {elem}</a> )}
        </div>
       </div>
       <Button />
    </div>
  )
}

export default Navbar