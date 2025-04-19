import React from "react"
import BookImage from "../assets/book-product.webp"

export default function ProductShowcase() {
  return (
    <section className="bg-gradient-to-t from-[#FFFFFF] via-[#D2DCFF] to-[#FFFFFF] py-16 sm:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-[640px] mx-auto flex flex-col items-center">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight mb-6">
            Boost your Grade
          </div>
          <h2 className="text-center text-3xl sm:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-6">
            The Shortcut You Need for a Better GPA
          </h2>
          <p className="text-center text-lg sm:text-[22px] leading-[30px] tracking-tighter text-[#010D3E] mb-10">
            Take your learning to the next level! Get premium notes, previous year questions, and suggestions prepared
            by top educators, delivered to you when you need them most. Maximize your GPA with resources designed for
            excellence
          </p>
          <img
            src={BookImage || "/placeholder.svg"}
            alt="Educational Book"
            className="w-32 h-32 object-contain mb-10"
          />
          <button className="bg-black text-white px-6 py-2 rounded-lg font-medium tracking-tight transition-colors hover:bg-black/90">
            Get for free
          </button>
        </div>
      </div>
    </section>
  )
}

