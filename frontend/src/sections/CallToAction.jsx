import React from "react"
import ArrowIcon from '../assets/right-arrow-black.webp'

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Sign up for free today
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tighter text-[#010D3E] mt-5">
            Take the first step toward smarter learning with our free sign-up. Gain instant access to a curated
            collection of previous year questions and e-books, all in one place, designed to streamline your academic
            preparation. Join a growing community of students who are transforming their study habits with the most
            reliable and organized resources. Don't wait – unlock your potential today!
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-10">
          <button className="bg-black text-white px-6 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight transition-colors hover:bg-black/90">
            Get for free
          </button>
          <button className="text-black bg-transparent px-6 py-2 gap-2 rounded-lg inline-flex items-center justify-center tracking-tight">
            <span>Learn more</span>
            <img 
              src={ArrowIcon || "/placeholder.svg"} 
              alt="Arrow" 
              className='h-5 w-5 mt-1'
            />
          </button>
        </div>
      </div>
    </section>
  )
}

