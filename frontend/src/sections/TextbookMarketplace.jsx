import React from "react"
import { Link } from "react-router-dom"
import OldBooks from "../assets/old-books.webp"

function TextbookMarketplace() {
  return (
    <section className="bg-gradient-to-t from-[#FFFFFF] via-[#D2DCFF] to-[#FFFFFF]  py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[640px] mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img src={OldBooks || "/placeholder.svg"} alt="Book Icon" className="w-16 h-16" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-6">
            Your Marketplace for Used Textbooks
          </h2>
          <p className="text-lg sm:text-[22px] leading-[30px] tracking-tighter text-[#010D3E] mb-10">
            Looking for affordable textbooks or want to earn from your old ones? Connect with peers in the WBSCTE
            community to trade textbooks seamlessly. Take the smarter route to learning by saving money and making the
            most of valuable resources.
          </p>
          <Link
            to=""
            className="bg-black text-white px-6 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight transition-colors hover:bg-black/90"
          >
            Buy and Sell Old Books
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TextbookMarketplace

