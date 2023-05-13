import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <header className='w-full h-[120px] px-10 py-10 font-medium flex justify-between items-center bg-dark'>

      <Image src={logo} height={'100'} width={'100'} alt='logo' />

      <nav className='text-light pr-10'>
        <Link className='mr-6' href='/'>Home</Link>
        <Link className='mr-6' href='/about'>About</Link>
        <Link className='mr-6' href='/projects'>Projects</Link>
        <Link className='mr-6' href='/contact'>Contact</Link>
      </nav>
    </header>
  )
}

export default NavBar