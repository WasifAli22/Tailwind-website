import React from 'react'
import { instaCard } from '@/constants'
import Card from '@/app/components/card'

export default function cardSect() {
    return (
        <>
            <div className="bg-[#050716] lg:px-[6rem] py-8 px-3" id='intro'>
                <h5 className='text-white opacity-[0.6] text-lg font-semibold'>INTRODUCTION</h5>
                <h1 className='text-white text-5xl font-extrabold py-3'>Overview</h1>
                <p className='opacity-[0.6] text-white text-lg pb-10'>I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Next.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
                </p>
                <div className="grid grid-cols-12 mt-[18px]">
                    {instaCard.map(({ imageSrc, title }) => (
                        <Card
                            key={title}
                            imageSrc={imageSrc}
                            title={title}
                        />
                    ))}
                </div>
            </div>
        </>

    )
}
