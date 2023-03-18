"use client"
import React from 'react'
import Image from 'next/image'
// import logos from '../logo.svg'
import { useState } from 'react';

const header = () => {

    return (
        <>
            <header className="p-2 bg-[#050716] text-white">
                <div className="container flex justify-between h-16 mx-auto">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex text-2xl font-bold items-center p-2">
                        Wasif Shahid
                    </a>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#intro" className="flex items-center opacity-[0.6] px-4 ">About</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#work" className="flex items-center opacity-[0.6] px-4 ">Work</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#review" className="flex items-center opacity-[0.6] px-4 ">reviews</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#cont-act" className="flex items-center px-4 dark:text-violet-400 opacity-[0.6]">Contact</a>
                        </li>

                    </ul>
                    <button className="flex justify-end p-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}
export default header