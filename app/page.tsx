import { Inter } from 'next/font/google'
import Hero from './components/hero'
// import Intro from './components/intro'
import Contact from './components/contact'
import Projects from './components/projects'
import CardSect from '@/sections/card-sec'
import ReviewSect from '@/sections/review-sect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Intro /> */}
      <CardSect />
      <Projects />
      <ReviewSect />
      <Contact />
    </>
  )
}
