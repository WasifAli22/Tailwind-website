import React from 'react'
import Testimonial from '@/app/components/testimonial'
import { reviews } from '@/constants'

export default function reviewSect() {
    return (
        <>
            <section className="text-white bg-[#050716]" id='review'>
                <div className="mx-auto lg:px-[6rem] py-16 px-3 sm:px-6 sm:py-24">
                    <h2 className="text-5xl font-extrabold capitalize tracking-tight">
                        Read trusted reviews from my customers
                    </h2>
                    <div className="grid grid-cols-12 gap-4 py-5">
                        {reviews.map(({ name, description }) => (
                            <Testimonial
                                key={name}
                                description={description}
                                name={name}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
