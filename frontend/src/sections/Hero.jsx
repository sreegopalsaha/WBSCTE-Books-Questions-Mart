import React from 'react'
import { Link } from 'react-router-dom'
import ArrowIcon from "../assets/right-arrow-black.webp"
import HeroImg from "../assets/hero-img.webp"
import BookImg from "../assets/book.webp"

export default function Hero() {
  return (
   <section className='pt-8 pb-20 md:pt-5 md:pb-10 px-4'>
    <div className='container max-w-none'>
      <div className='md:flex'>
       <div>
          <div className='text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight'>visit our main website</div>
          <h1 className='text-6xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>Prepare <br /> like a Pro</h1>
          <p className='text-xl text-[#010D3E] tracking-tight mt-6'>
            Download all previous year questions, e-books, and other study related Content for free.
          </p>
          <div className='flex gap-2 items-center mt-[30px]'>
            <Link 
            to={"/search"}
            className='bg-black text-white px-4 py-1 rounded-lg font-medium inline-flex align-items justify-center cursor-pointer tracking-tight'>Get for free</Link>
            <Link 
              to={"/aboutus"}
              className='text-black bg-transparent gap-1 inline-flex cursor-pointer'>
              <span>Learn more</span>
              <img src={ArrowIcon} alt="-->" className='h-5 w-5 mt-1'/>
              
            </Link>
          </div>
      </div>
      <div className='mt-10 lg:mt-0 lg:ml-20'>
      <img 
        src={BookImg || "/placeholder.svg"} 
        alt="Book Image" 
        width={65} 
        height={865} 
        className='hidden md:block rotate-[-20deg] md:absolute '
      />
        <img 
          src={HeroImg || "/placeholder.svg"} 
          alt="Study Image" 
        />
      </div>
      </div>
    </div>
   </section>
  )
}