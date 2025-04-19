import React from 'react'
import Hero from '../sections/Hero'
import ProductShowcase from '../sections/ProductShowcase'
import Testimonials from '../sections/Testimonials'
import CallToAction from '../sections/CallToAction'
import TextbookMarketplace from '../sections/TextbookMarketplace'

function Home() {
  return (
    <div>
    <Hero/>
    <TextbookMarketplace/>
    <ProductShowcase/>
    <Testimonials/>
    <CallToAction/>
    </div>
  )
}

export default Home