'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const isUserLoggedIn = true;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex justify-between items-center px-8 py-6 md:px-12'>

        <Link href='/' className='flex items-center gap-2'>
            <Image 
                src='/ai.png'
                width={40}
                height={40}
                alt='logo'
            />
            <p className='text-2xl font-semibold hidden md:flex'>Promptopia</p>
        </Link>


        {/* Desktop */}
        <div className='hidden md:flex'>
            {isUserLoggedIn ? (
                <div className='flex gap-4'>
                    <Link href='create-post' className='black-btn'>Create Post</Link>
                    <button type='button' className='outline-btn'>Sign Out</button>
                    <Link href='/profile'>
                        <Image 
                            src='/avatar.png'
                            width={40}
                            height={40}
                            alt='avatar'
                        />
                    </Link>
                </div>
            ): (
                <div>

                </div>
            )}
        </div>

        {/* Mobile */}
        <div className='md:hidden'>
            {isUserLoggedIn ? (
                <div onClick={() => setIsMenuOpen((prev) => !prev)}>
                    <AiOutlineMenu size={24}/>
                    {isMenuOpen && 
                        <div className='dropdown'>
                            <Link href='/profile' onClick={() => setIsMenuOpen(false)} className='dropdown-link'>My Profile</Link>
                            <Link href='/profile' onClick={() => setIsMenuOpen(false)} className='dropdown-link'>Create Prompt</Link>
                            <Link href='/profile' onClick={() => setIsMenuOpen(false)} className='dropdown-link black-btn'>Sign Out</Link>
                        </div>
                    
                    }
                </div>
            ) : (
                <div>

                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar