import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { useRouter } from 'next/router'

const NavBar = () => { 

  const router = useRouter();
  console.log(router);

  return (
    <header className='w-full h-[120px] px-10 py-10 font-medium flex justify-between items-center bg-dark'>

      <Image src={logo} height={'100'} width={'100'} alt='logo' />

      <nav className='text-light pr-10'>
        <Link className='mr-6 relative group' href='/'>Home <span className={`h-[2px] inline-block bg-[#2057d8] absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === '/' ? "w-full" : 'w-0'}`}>&nbsp;</span></Link>
        <Link className='mr-6 relative group' href='/about'>About <span className={`h-[2px] inline-block bg-[#2057d8] absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === '/about' ? "w-full" : 'w-0'}`}>&nbsp;</span></Link>
        <Link className='mr-6 relative group' href='/projects'>Projects <span className={`h-[2px] inline-block bg-[#2057d8] absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === '/projects' ? "w-full" : 'w-0'}`}>&nbsp;</span></Link>
        <Link className='mr-6 relative group' href='/contact'>Contact <span className={`h-[2px] inline-block bg-[#2057d8] absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === '/contact' ? "w-full" : 'w-0'}`}>&nbsp;</span></Link>
      </nav>
    </header>
  )
}

export default NavBar