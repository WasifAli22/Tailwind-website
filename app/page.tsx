import { Inter } from 'next/font/google'
import Hero from './components/hero'
// import Intro from './components/intro'
import Contact from './components/contact'
import Projects from './components/projects'
import Testimonial from './components/testimonial'
import Card from './components/card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const cards = [
    {
      imageSrc: '/images/backend.webp',
      title: 'Daniyal Nagori ',
    },
    {
      imageSrc: '/images/nextjs.png',
      title: 'Zia Khan ',
    },
    {
      imageSrc: '/images/react.png',
      title: 'Adil Altaf ',
    },
    {
      imageSrc: '/images/web-deve.png',
      title: 'Zeeshan Hanif ',
    },
  ];

  return (
    <>
      <Hero />
      {/* <Intro /> */}
      <div className="bg-[#050716] lg:px-[6rem] py-8  px-3" id='intro'>
        <h5 className='text-white opacity-[0.6] text-lg col-span-12 font-semibold'>INTRODUCTION</h5>
        <h1 className='text-white text-5xl font-extrabold py-3 col-span-12'>Overview</h1>
        <p className='opacity-[0.6] text-white text-lg mb-6 col-span-12'>I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Next.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
        </p>
        <div className="grid md:grid-cols-2 gird-cols-1 xl:grid-cols-4">
          {cards.map(({ imageSrc, title }) => (
            <Card
              key={title}
              imageSrc={imageSrc}
              title={title}
            />
          ))}
        </div>
      </div>
      <Projects />
      <Testimonial />
      <Contact />
    </>
  )
}
