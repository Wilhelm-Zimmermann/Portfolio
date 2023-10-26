import { About } from '@/components/About'
import AboutMe from '@/components/AboutMe'
import { Header } from '@/components/Header/Header'
import { TechStack } from '@/components/TechStack'
import RootLayout from './layout'

export default function Home() {
  return (
    <RootLayout>
      <div className='flex flex-col'>
        <Header />
        <About />
        <TechStack />
        {/* <AboutMe /> */}
      </div>
    </RootLayout>
  )
}
