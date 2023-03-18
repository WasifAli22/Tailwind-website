'use client'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
export default function hero() {
    const [text]: any = useTypewriter({
        words: [' Frontend Developer ', ' Backend Developer', ' Designer ', ' Next.js Developer'],
        loop: 999,
    })
    return (
        <>
            <div className="bg-[url('/images/hero-bg.webp')] bg-cover bg-center text-center h-[250px] bg-no-repeat">
                <h1 className='text-5xl pt-[55px] font-extrabold text-white'>Hi, I'm  <span className='text-[#433d6f]'>Wasif</span></h1>
                <h1 className='pt-[50px] text-white font-bold text-4xl'>
                    I'm
                    <span className='text-white font-bold'>
                        {text}
                    </span>
                    <span>
                        <Cursor cursorStyle='_' />
                    </span>
                </h1>
            </div>
        </>
    )
}