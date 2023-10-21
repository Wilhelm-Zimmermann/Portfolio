import { About } from '@/components/About'
import { Header } from '@/components/Header/Header'
import { TechStack } from '@/components/TechStack'

export default function Home() {
  return (
    <div className='flex flex-col px-20'>
      <Header />
      <About />
      <TechStack />
    </div>
  )
}
