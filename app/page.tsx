import { Inter } from 'next/font/google'
import Hero from './components/hero'
import Intro from './components/intro'
import Contact from './components/contact'
import Projects from './components/projects'
import Testimonial from './components/testimonial'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Projects />
      <Testimonial />
      <Contact />
    </>
  )
}
