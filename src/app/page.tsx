import { About } from '@/components/About'
import AboutMe from '@/components/AboutMe'
import { Header } from '@/components/Header/Header'
import { TechStack } from '@/components/TechStack'

export default function Home() {
  return (
    // <div className='flex flex-col bg-gradient-to-b from-primary via-comp1 to-comp2'>
    <div className='flex flex-col bg-primary'>
      <Header />
      <About />
      <TechStack />
      <AboutMe />
    </div>
  )
}
