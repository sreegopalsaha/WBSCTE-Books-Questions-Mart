import React from "react"
import { Link } from "react-router-dom"

function AboutUs() {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center mb-8">
           Empowering the WBSCTE Community
          </h1>

          <div className="space-y-6 text-[#010D3E] text-center">
            <p className="text-lg sm:text-xl leading-relaxed">
              We are dedicated to providing West Bengal diploma students with a one-stop solution for academic success.
              From previous year questions to curated e-books and premium notes, our platform is designed to make
              learning accessible and efficient.
            </p>

            <p className="text-lg sm:text-xl leading-relaxed">
              We understand the challenges students face, which is why we also offer a unique marketplace to buy and
              sell used textbooks, connecting learners and fostering a supportive community.
            </p>

            <p className="text-lg sm:text-xl leading-relaxed">
              Our mission is to simplify your academic journey, helping you focus on what truly matters—your education.
              Join us as we empower the WBSCTE community to achieve their goals, one step at a time.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              {/* <Book className="w-12 h-12 text-[#001E80] mb-4" /> */}
              <h3 className="text-xl font-semibold mb-2">Comprehensive Resources</h3>
              <p className="text-[#010D3E]">Access a wide range of study materials tailored for WBSCTE students.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              {/* <Users className="w-12 h-12 text-[#001E80] mb-4" /> */}
              <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
              <p className="text-[#010D3E]">Connect with peers, share knowledge, and grow together.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              {/* <Target className="w-12 h-12 text-[#001E80] mb-4" /> */}
              <h3 className="text-xl font-semibold mb-2">Goal-Oriented</h3>
              <p className="text-[#010D3E]">Focused on helping you achieve academic excellence and beyond.</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to=""
              className="bg-black text-white px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight transition-colors hover:bg-black/90 text-lg"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs