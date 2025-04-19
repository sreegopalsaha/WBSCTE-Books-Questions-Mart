import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.webp'
import Menu from '../assets/menu.webp'
import {ArrowRight} from 'lucide-react'

export default function Header() {
  return (
    <header className='sticky top-0 bg-white z-20'>
      <div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3'>
        <div className='inline-flex gap-2 items-center'>
          <p className='text-white/60 hidden md:block'>Download Previous Year Questions and E-Books</p>
          <p>Get started for free</p>
          <ArrowRight className='h-4 w-4 inline-flex justify-center items-center'/>
        </div>
      </div>
      <div className='py-5 px-5'>
        <div className='flex items-center justify-between'>
          <div className='inline-flex items-baseline'>
            <img 
            src={Logo || "/placeholder.svg"} 
            alt="Rezime" 
            height={40} 
            width={60}/>
            <sup className="text-sm ml-1">By Rezime</sup>
          </div>
          <img 
          src={Menu || "/placeholder.svg"} 
          alt="Hamburger" 
          className='h-5 w-5 mr-2 md:hidden' 
          />
          <nav className='hidden md:flex gap-6 text-black/60 items center'>
            <Link to="/">Home</Link>
            <Link to="">E-Books</Link>
            <Link to="">PYQ's</Link>
            <Link to="">Suggestions</Link>
            <Link to="AboutUs">About</Link>
            <Link to="helpdesk">Help</Link>
            <button className='bg-black text-white px-4 py-1 rounded-lg font-medium inline-flex align-items justify-center tracking-tight mr-3'>
            Get for free
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}